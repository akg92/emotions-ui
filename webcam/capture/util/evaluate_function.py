

from scipy.spatial import distance_matrix
from scipy.spatial.distance import cosine
import numpy as np


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
        

import csv
def get_all_mapping(sim_file_name, out_dim = 20):

    mapping = {}
    #sim_file_name = os.environ['S_MAPPING_CSV']
    ## sleep till the command execute
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
    print(mapping)
    return mapping





def avg_mean_l2(metrics_names, metrics, size):

    k_avgs = np.zeros((size, size))
    avg_matrix = []
    reverse_match = False
    for i in range(len(metrics_names)):
        avg_matrix.append(np.mean(metrics[metrics_names[i]], axis = 0))
    
    ## cosine distance
    for i in range(len(metrics_names)):

        for j in range(i + 1,len(metrics_names)):
            k_avg = np.linalg.norm(avg_matrix[i] - avg_matrix[j])
            k_avgs[i][j] = k_avg

    return k_avg


def mean_distance_all(metrics_names, metrics, size):
    """
        Average distance all pair
    """
    k_avgs = np.zeros((size, size))
    for i in range(len(metrics_names)):

        for j in range(i + 1,len(metrics_names)):
            k_avg = np.mean(distance_matrix(metrics[metrics_names[i]], metrics[metrics_names[j]] ))
            k_avgs[i][j] = k_avg

    return k_avgs

def mean_distance_cosine(metrics_names, metrics, size):

    """
        Mean as signature
    """
    avg_matrix = []
    #reverse_match = True
    for i in range(len(metrics_names)):
        avg_matrix.append(np.mean(metrics[metrics_names[i]], axis = 0))
    
    ## cosine distance
    for i in range(len(metrics_names)):

        for j in range(i + 1,len(metrics_names)):
            k_avg = cosine(avg_matrix[i], avg_matrix[j])
            k_avgs[i][j] = k_avg

    return k_avg


def get_emotion_and_intensity(file_name):
    parts = file_name.split("-")

    return parts[2], parts[3]

def calculate_top_k(list_ele):
    first = list_ele[0]
    list_ele = list_ele[1:]

    match_em = 0
    match_intensity = 0

    emotion, intensity = get_emotion_and_intensity(first)
    index = 0
    ks = set([1,5,10])

    result = []

    for file in list_ele:
        index += 1
        e, i = get_emotion_and_intensity(file)
        if e == emotion:
            match_em += 1
        if i == intensity:
            match_intensity += 1

        if index in ks:
            result.append( (match_em/index), (match_intensity/index) )
    
    result.append( (match_em/index, match_intensity/index))
 
    return result

def calculate_top_k_all(all_mapping):

    count = 0
    avg_sum_em = [0 for i in range(4)]
    avg_sum_intensity = [0 for i in range(4)]

    for mapping in all_mapping:

        if( len(mapping) > 1):
            count += 1
            """
                sum all top k
            """
            top_k = calculate_top_k(mapping)
            for i in range(len(top_k)):
                avg_sum_em[i] += top_k[0]
                avg_sum_intensity[i] += top_k[1]

    tops = [1,5,10, -1]
    for i in range(avg_sum_em):
        avg_sum_em[i] /= count
        avg_sum_intensity[i] /= count

        print("Average top {}: emotions {} : intensity ".format(tops[i], avg_sum_em[i], 
            avg_sum_intensity[i]))

    return avg_sum_em, avg_sum_intensity

import os
"""
 Order the files with the emotions
"""
def calculate_avg_distance(in_file_name):
    metrics = get_all_mapping(in_file_name)
    print("Got all mapping")
    metrics_names = list(metrics.keys())
    size = len(metrics_names)

    ## variable hold the nature of similarity
    reverse_match  = False
    
    """
        Avg distance distance
    """

    function_list =[ (avg_mean_l2, "average mean l2", False), (mean_distance_all, "mean distance all pair", False)
        , ( mean_distance_cosine, "cosine mean", True)]    


    for func, description, reverse_match in function_list:
        k_avgs = func(metrics_names, metrics, size)
        order = np.argsort(k_avgs)
        print(order)
        """
            ordered similarity
        """
        result = []
        ## video file extension
        file_extension = '.mp4'
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

        print("############RESULT {}###############".format(description))
        calculate_top_k_all(result)
        print("##################### END #############################")

    return result 
## fill below params with file name
import sys
file_name = sys.argv[1]
calculate_avg_distance(file_name)