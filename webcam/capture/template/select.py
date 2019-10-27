
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

    def get(self, request,file_name=None):
        
        if( not file_name):
            result = []
            for file in os.listdir(os.environ['CUT_FOLDER']):
                result.append( {'file_name': '/select/'+file} )
        
            return Response( {'files': result}, 200)

        file_name = os.path.join(os.environ['CUT_FOLDER'], file_name)
        fs = FileSystemStorage()
        obj = fs.open(file_name)
        response = Response()
        response.status_code = 200
        #response['Content-Disposition'] = 'attachment; filename={}.jpg'.format(file_name)
        #response.write("hello")
        content = b''
        with open(file_name,'rb') as f:
            for line in f:
                content += line

        #obj.close()
        response = Response(  content )
        response.content_type ='image/jpeg'
        return response


    ## pick the file name
    def post(self, request, file_name):
        util.find_similar(file_name)



