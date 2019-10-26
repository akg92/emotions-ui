
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

class Select(APIView):

    def get(self, request):
        result = []
        for file in os.listdir(os.environ['CUT_FOLDER']):
            result.append( {'file_name': file} )
        
        return Response( {'files': result}, 200)
    ## pick the file name
    def post(self, request, file_name):
        util.find_similar(file_name)



