import os
import tensorflow as tf
from keras.backend.tensorflow_backend import set_session
def limitUsage(deviceList):
    config = tf.ConfigProto()
    config.gpu_options.allow_growth = True
    config.gpu_options.visible_device_list = deviceList #only the gpu 0 is allowed
    set_session(tf.Session(config=config))


"""
  Set gpu
"""
limitUsage(os.environ["GPU"])


import face_recognition
import cv2
import shutil 
import sys
import math

"""
    Rename files with underscore
"""

def renameFiles(folder):

    for file in os.listdir(folder):
        if "_" in file:
            file_path = os.path.join(folder, file)
            file_path_new = os.path.join(folder, file.replace("_", ""))
            os.rename(file_path, file_path_new) 

def cut_images(in_folder, out_folder):
    print('{}:{}'.format(in_folder, out_folder))
    if(os.path.exists(out_folder)):
        #shutil.rmtree(out_folder)
        return
    ## create frames from video
    renameFiles(os.environ['S_VIDEO_FOLDER'])
    print("infolder: "+ in_folder)
    #get_frames(in_folder)
    os.mkdir(out_folder)
    print("Total  {}".format( len(os.listdir(in_folder))))
    for file in os.listdir(in_folder):
        # print('Processing file {}'.format(file))
        in_file_path = os.path.join(in_folder, file)
        image = face_recognition.load_image_file(in_file_path)
        face_locations = face_recognition.face_locations(image)
        if(not face_locations):
            continue
        i  = 0
        for face_location in face_locations:
            #print(face_location)
            cut_img = image[face_location[0]:face_location[2], face_location[3]:face_location[1]]
            out_file_path = os.path.join(out_folder, str(i)+"_"+file)
           
            #print('Processing file {}'.format(out_file_path))
            cv2.imwrite(out_file_path, cv2.cvtColor(cut_img, cv2.COLOR_RGB2BGR))
            if not os.path.exists(out_file_path):
                print("Error: file exist {}".format(out_file_path))
            i += 1
        if (i == 0):
            print('Processing file No face {}'.format(file))
            
"""
    Get frames.
"""
def get_frames(out_folder, k = 10):
    if os.path.exists(out_folder):
        #pass 
        shutil.rmtree(out_folder, ignore_errors= True)
    else:
        os.mkdir(out_folder)    
    video_folder = os.environ['S_VIDEO_FOLDER']
    
    for file in os.listdir(video_folder):
        print('Processing {}'.format(file))
        video_file = os.path.join(video_folder, file)
        video_file_prefix = os.path.splitext(file)[0]
        cap = cv2.VideoCapture(video_file)
        frame_rate = cap.get(cv2.CAP_PROP_FPS)/k

        while(cap.isOpened()):

            cur_frame = cap.get(1)
            ret, frame = cap.read() 
            # print('{}: {}'.format(cur_frame, frame_rate))
            if(math.floor(cur_frame) % math.floor(frame_rate) == 0):
                out_file = os.path.join(out_folder, str(int(cur_frame))+"_"+video_file_prefix+".jpg")
                cv2.imwrite(out_file, frame)
            if( not ret ):
                break

"""
get video file from image
"""
def get_video_file_name_from_img(file):
    print('full video file name' + file)
    props = file.split("_")
    frame_id = int(props[1])
    file_prefix = props[2]
    file_prefix = file_prefix[:file_prefix.index('.')]
    return file_prefix, frame_id
        

def get_all_cut_images(cut_folder):

    file_map = {}
    for file in os.listdir(cut_folder):
        props = file.split("_")
        frame_id = int(props[0])
        file_prefix = props[1]
        
        if file_prefix not in file_map:
            file_map[file_prefix] = []
        file_map[file_prefix].append((file,frame_id))

    
    for key,value in file_map.items():
        file_map[key] = sorted(value, key = lambda x: x[0])
    
    return file_map

import csv
import time
import numpy as np
"""
Populate the 2d distance
"""
def get_all_mapping(sim_file_name, out_dim = 20):

    mapping = {}
    #sim_file_name = os.environ['S_MAPPING_CSV']
    ## sleep till the command execute
    while(not os.path.exists(sim_file_name)):
        print("Wait for similar create")
        time.sleep(5)
    print("Similar file created")

    print("Reading Similar file"+ sim_file_name)
    index = 0 
    with open(sim_file_name, 'r') as f:
        reader =  csv.reader(f)
        for row in reader:
            index += 1
            if index == 1:
                continue
            video_file, frame_index = get_video_file_name_from_img(row[0])
            print('frame_index {}; video_file {}'.format(frame_index, video_file))
            if video_file not in mapping:
                mapping[video_file] = []
            
            mapping[video_file].append( (frame_index, row[1:]))
    """
      sort by frame index.
      convert to into 2d array.
    """
    for key in mapping.keys():
        mapping[key] = sorted(mapping[key], key = lambda x: x[0])
        mapping[key] = [ [float(i) for i in x[1]] for x in mapping[key]]
        mapping[key] = np.array( mapping[key])
    
    return mapping
    #np.array([float(x) for x in row[1:]]).reshape((-1,out_dim))
from scipy.spatial import distance_matrix
from scipy.spatial.distance import cosine 
"""
 Order the files with the emotions
"""
def calculate_avg_distance(in_file_name, out_file_name):
    metrics = get_all_mapping(in_file_name)
    print("Got all mapping")
    metrics_names = list(metrics.keys())
    size = len(metrics_names)
    k_avgs = np.zeros((size, size))

    ## variable hold the nature of similarity
    reverse_match  = False
    """
        Average distance all pair
    """
    # for i in range(len(metrics_names)):

    #     for j in range(i + 1,len(metrics_names)):
    #         k_avg = np.mean(distance_matrix(metrics[metrics_names[i]], metrics[metrics_names[j]] ))
    #         k_avgs[i][j] = k_avg

    # """
    #     Mean as signature
    # """
    # avg_matrix = []
    # reverse_match = True
    # for i in range(len(metrics_names)):
    #     avg_matrix.append(np.mean(metrics[metrics_names[i]], axis = 0))
    
    # ## cosine distance
    # for i in range(len(metrics_names)):

    #     for j in range(i + 1,len(metrics_names)):
    #         k_avg = cosine(avg_matrix[i], avg_matrix[j])
    #         k_avgs[i][j] = k_avg

    """
        Avg distance distance
    """
    avg_matrix = []
    reverse_match = False
    for i in range(len(metrics_names)):
        avg_matrix.append(np.mean(metrics[metrics_names[i]], axis = 0))
    
    ## cosine distance
    for i in range(len(metrics_names)):

        for j in range(i + 1,len(metrics_names)):
            k_avg = np.linalg.norm(avg_matrix[i] - avg_matrix[j])
            k_avgs[i][j] = k_avg


    order = np.argsort(k_avgs)
    
    """
        ordered similarity
    """
    result = []
    ## video file extension
    file_extension = os.environ['S_EXT']
    for i in range(size):
        ## file extension should be add

        cur_file  = metrics_names[i] + file_extension
        temp_list = [] ## to store the names
        
        if(not reverse_match):
            temp_list.append(cur_file)

        for j in range(size):
            if( i  != j):
                temp_list.append(metrics_names[order[i][j]] + file_extension) ## index is nothing but the order in the sorted array.
        ## reverse if the match function is reverse
        if(reverse_match):
            temp_list.append(cur_file)
            temp_list.reverse()
        result.append(temp_list)

    with open(out_file_name, 'w') as f:
        csv_writer = csv.writer(f)
        csv_writer.writerows(result)
    return result 

import shutil
"""
    main function to orchestrate
"""
def process_main():
    
    cut_images(os.environ['S_ALL_FOLDER'], os.environ['S_CUT_FOLDER'])


    #shutil.rmtree(os.environ['S_STORE_DIR'],ignore_errors = True)
    #os.mkdir(os.environ['STORE_DIR'])
    #shutil.copytree(sim_folder, os.environ['S_STORE_DIR'])
    
    ## only execute if the csv doesn't exist
    if not os.path.exists(os.environ['S_SIM_CSV']):
        cmd = os.environ['S_CMD_EXE'].format( os.path.abspath(os.environ['S_CUT_FOLDER']),
            os.path.abspath('./data_s'))
        os.system(cmd)

    calculate_avg_distance(os.environ['S_SIM_CSV'], os.environ['S_MAPPING_CSV'])
    #remove_common_people()

"""
   Process everything
"""
process_main()
