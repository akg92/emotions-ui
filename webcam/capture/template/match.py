
from rest_framework.views import APIView
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from django.core.files.storage import FileSystemStorage
from django.core.files.base import ContentFile 
import os
import base64
import json
import csv
class SimStore():
    
    mapping = None
    @staticmethod
    def populate():
        if not SimStore.mapping:
            SimStore.mapping = {}

            sim_file_name = os.environ['SIM_CSV']

            with open(sim_file_name, 'r') as f:
               reader =  csv.reader(f)
               for row in reader:
                   SimStore.mapping[row[0]] = row[1:]
        return SimStore.mapping




class Match(APIView):

    def get(self, request, file_name):
        response = Response( SimStore.populate()[file_name], status= 200 )
        return response
        
    