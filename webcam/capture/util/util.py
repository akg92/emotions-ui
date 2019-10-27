import face_recognition
import os
import cv2
import shutil 
import sys
import math
def cut_images(in_folder, out_folder):
    if(os.path.exists(out_folder)):
        return
    ## create frames from video
    get_frames(in_folder)

    for file in os.listdir(in_folder):
        in_file_path = os.path.join(in_folder, file)
        image = face_recognition.load_image_file(in_file_path)
        face_locations = face_recognition.face_locations(image)
        i  = 0
        for face_location in face_locations:
            cut_img = image[face_location[0]:face_location[2], face_location[1]:face_location[3]]
            out_file_path = os.path.join(out_folder, str(i)+"_"+file)
            cv2.imwrite(out_file_path, cut_img)
            i += 1
"""
    Get frames.
"""
def get_frames(out_folder):
    if os.path.exists(out_folder):
        shutil.rmtree(out_folder, ignore_errors= True)
    
    video_folder = os.environ['VIDEO_FOLDER']
    
    for file in os.listdir(video_folder):
        video_file = os.path.join(video_folder, file)
        video_file_prefix = os.path.splitext(file)[0]
        cap = cv2.VideoCapture(video_file)
        frame_rate = cap.get(5)

        while(cap.isOpened()):

            cur_frame = cap.get(1)
            ret, frame = cap.read()
            if(cur_frame % math.floor(frame_rate)):
                out_file = os.path.join(out_folder, str(cur_frame)+"_"+video_file+".jpg")
                cv2.imwrite(out_file, frame)
    


"""
    find similar images
"""
def find_similar(first_img):
    cut_folder = os.environ['CUT_FOLDER']
    first_img = os.path.join(cut_folder, first_img)
    base_path = os.path.splitext(first_img)[0]
    
    sim_folder = os.path.join( os.environ['SIM_FOLDER'],base_path)
    if(os.path.exists(sim_folder)):
        return 
    
    os.mkdir(sim_folder)
    
    first_img_obj = face_recognition.load_image_file(first_img)
    first_img_encoding = face_recognition.face_encodings(first_img_obj)[0]
    for file in os.listdir(cut_folder):
        in_file = os.path.join(cut_folder, file)
        out_file = os.path.join(sim_folder, file)
        unknown_picture = face_recognition.load_image_file(in_file)
        unknown_face_encoding = face_recognition.face_encodings(unknown_picture)[0]
        result = face_recognition.compare_faces(first_img_encoding, unknown_face_encoding)
        if(result[0]):
            shutil.copyfile(in_file,out_file)
    ## execute the code to compute similarity
    cmd = os.environ['CMD_EXE'].format(sim_folder, sim_folder)
    os.environ['STORE_DIR'] = sim_folder+'/'
    os.environ['RELOAD_SIM'] = True
    os.system(cmd)

"""
    cut images
"""
cut_images(os.environ['ALL_FOLDER'], os.environ['CUT_FOLDER'])