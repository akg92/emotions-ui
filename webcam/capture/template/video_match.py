
from rest_framework.views import APIView
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from django.core.files.storage import FileSystemStorage
from django.core.files.base import ContentFile 
import os
import base64
import json
import csv
from capture.util import util
from django.http import HttpResponse


file_extension = 'webm'
"""

Add extension

Returns:
    [type] -- return string
"""
def get_full_video_file(file_name):
    return file_name + '.'+ file_extension




"""
 Get specific video file
"""
def get_vid_file(request, file_name):
    video_folder = os.environ['S_VIDEO_FOLDER']
    file_name = os.path.join(os.environ[''], file_name)
    with open(file_name,'rb') as f:
        return HttpResponse(f.read(), content_type="video/mp4")

"""
    Get list of videos
"""
def list_vid_files(request):
    video_folder = os.environ['S_VIDEO_FOLDER']
    result = []
    for file in os.listdir(video_folder):
        result.append({'file_name' : file})
    
    return_result = json.dumps({'files':  result})

    return HttpResponse(return_result, content_type = 'application/json')


from capture.util.util_video import get_all_mapping

all_mapping  = None
"""


Returns:
    [type] -- similar video file list
"""
def get_similar_vid(request, file_name):
    ## get dictionary
    if not all_mapping:
        all_mapping = get_all_mapping()

    ## Add self first.
    mappings = [ {
        'file_name':file_name
    }]

    ## map to expected output
    if file_name in all_mapping:
        #mappings = all_mapping[file_name]
        for m in all_mapping[file_name]:
            mappings.append({'file_name': m})

    
    return_result = json.dumps({'files':  mappings})
    return HttpResponse(json.dumps(return_result, content_type = 'application/json'))


    
    


