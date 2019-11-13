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



def cut_images(in_folder, out_folder):
    print('{}:{}'.format(in_folder, out_folder))
    if(os.path.exists(out_folder)):
        #shutil.rmtree(out_folder)
        return
    ## create frames from video
    get_frames(in_folder)
    os.mkdir(out_folder)
    for file in os.listdir(in_folder):
        print('Processing file {}'.format(file))
        in_file_path = os.path.join(in_folder, file)
        image = face_recognition.load_image_file(in_file_path)
        face_locations = face_recognition.face_locations(image)
        i  = 0
        for face_location in face_locations:
            print(face_location)
            cut_img = image[face_location[0]:face_location[2], face_location[3]:face_location[1]]
            out_file_path = os.path.join(out_folder, str(i)+"_"+file)
            print('Processing file {}'.format(out_file_path))
            cv2.imwrite(out_file_path, cv2.cvtColor(cut_img, cv2.COLOR_RGB2BGR))
            i += 1
"""
    Get frames.
"""
def get_frames(out_folder):
    if os.path.exists(out_folder):
        return 
        #shutil.rmtree(out_folder, ignore_errors= True)
    os.mkdir(out_folder)    
    video_folder = os.environ['VIDEO_FOLDER']
    
    for file in os.listdir(video_folder):
        print('Processing {}'.format(file))
        video_file = os.path.join(video_folder, file)
        video_file_prefix = os.path.splitext(file)[0]
        cap = cv2.VideoCapture(video_file)
        frame_rate = cap.get(5)

        while(cap.isOpened()):

            cur_frame = cap.get(1)
            ret, frame = cap.read()
            # print('{}: {}'.format(cur_frame, frame_rate))
            if(math.floor(cur_frame) % math.floor(frame_rate) == 0):
                out_file = os.path.join(out_folder, str(int(cur_frame))+"_"+video_file_prefix+".jpg")
                cv2.imwrite(out_file, frame)
            if( not ret ):
                break
    

def is_popular(first_img, found_set):

    if(first_img in found_set):
        return True

    cut_folder = os.environ['CUT_FOLDER']
    threshold = int(0.05 * len(os.listdir(cut_folder))) 
    base_path = str(abs(hash(os.path.splitext(first_img)[0])))
    first_img = os.path.join(cut_folder, first_img)
    
    sim_folder = os.path.join( os.environ['SIM_FOLDER'],base_path)
    if(os.path.exists(sim_folder)):
        return 
    
    #os.mkdir(sim_folder)
    
    first_img_obj = face_recognition.load_image_file(first_img)
    print('Image shape{}'.format(first_img_obj.shape))
    first_img_encodings = face_recognition.face_encodings(first_img_obj) 

    if(first_img_encodings is None or len(first_img_encodings) == 0 ):
        print('First image is empty {}'.format(first_img_encodings))
        return 
    first_img_encoding = first_img_encodings[0]

    first_img_encoding =  first_img_encodings[0]
    sim_files = [first_img]
    for file in os.listdir(cut_folder):
        in_file = os.path.join(cut_folder, file)
        out_file = os.path.join(sim_folder, file)
        unknown_picture = face_recognition.load_image_file(in_file)
        unknown_face_encodings = face_recognition.face_encodings(unknown_picture)
        if(unknown_face_encodings is None or len(unknown_face_encodings) == 0 ):
            continue
        print(in_file)

        unknown_face_encoding = unknown_face_encodings[0]
        result = face_recognition.compare_faces([first_img_encoding], unknown_face_encoding)
        if(result[0]):
            sim_files.append(file)

    if(len(sim_files) >= threshold):
        for file in sim_files:
            found_set.add(file)
        return True
    return False

def remove_common_people():
    cut_folder = os.environ['CUT_FOLDER']
    all_files = os.listdir(cut_folder)
    wanted = set()
    for file in all_files:
        is_popular(file, wanted)

    for file in all_files():
        if file not in wanted:
            os.remove(os.path.join(cut_folder), file)
    


  
"""
    find similar images
"""



def find_similar(first_img):
    cut_folder = os.environ['CUT_FOLDER']
    base_path = str(abs(hash(os.path.splitext(first_img)[0])))
    first_img = os.path.join(cut_folder, first_img)
    
    sim_folder = os.path.join( os.environ['SIM_FOLDER'],base_path)
    if(os.path.exists(sim_folder)):
        return 
    
    os.mkdir(sim_folder)
    
    first_img_obj = face_recognition.load_image_file(first_img)
    print('Image shape{}'.format(first_img_obj.shape))
    first_img_encodings = face_recognition.face_encodings(first_img_obj) 

    if(first_img_encodings is None or len(first_img_encodings) == 0 ):
        print('First image is empty {}'.format(first_img_encodings))
        return 
    first_img_encoding = first_img_encodings[0]

    first_img_encoding =  first_img_encodings[0]
    for file in os.listdir(cut_folder):
        in_file = os.path.join(cut_folder, file)
        out_file = os.path.join(sim_folder, file)
        unknown_picture = face_recognition.load_image_file(in_file)
        unknown_face_encodings = face_recognition.face_encodings(unknown_picture)
        if(unknown_face_encodings is None or len(unknown_face_encodings) == 0 ):
            continue
        print(in_file)

        unknown_face_encoding = unknown_face_encodings[0]
        result = face_recognition.compare_faces([first_img_encoding], unknown_face_encoding)
        if(result[0]):
            if( not os.path.exists(sim_folder)):
                os.mkdir(sim_folder)
            shutil.copyfile(in_file,out_file)
    ## execute the code to compute similarity
    shutil.rmtree(os.environ['STORE_DIR'],ignore_errors = True)
    #os.mkdir(os.environ['STORE_DIR'])
    shutil.copytree(sim_folder, os.environ['STORE_DIR'])
    cmd = os.environ['CMD_EXE'].format( os.path.abspath(os.environ['STORE_DIR']),
        os.path.abspath('./data2'))
    #os.environ['STORE_DIR'] = sim_folder+'/'
    os.environ['RELOAD_SIM'] = 'True'
    os.system(cmd)

"""
    cut images
"""
if __name__ == "__main__":
    cut_images(os.environ['ALL_FOLDER'], os.environ['CUT_FOLDER'])
    remove_common_people()