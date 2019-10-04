
from rest_framework.views import APIView
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from django.core.files.storage import FileSystemStorage
from django.core.files.base import ContentFile 
import os
import base64
import json
class FileUpload(APIView):

    def abs_get_file_name(self, file_name):
        self.mkdir()
        return os.path.join(os.path.abspath(os.environ['STORE_DIR']), file_name)
    
    def mkdir(self):
        if(not os.path.exists(os.path.abspath(os.environ['STORE_DIR']))):
            os.mkdir(os.path.abspath(os.environ['STORE_DIR']))
    
    def get_file_list(self):
        dir = os.path.abspath(os.environ['STORE_DIR'])
        files = os.listdir(dir)
        result = []
        for file in files:
            full_path = os.path.join(dir, file)
            if not os.path.isdir(full_path):
                result.append( { 'file_name': full_path })
        return result


    def post(self, request, file_name):
        img_data = request.data
        for key, value in request.data.items():
            print("key:"+ key + ":" )
        print(request.data.keys())
        file_name = self.abs_get_file_name(file_name)
        fs = FileSystemStorage()
        data = request.data['content'][len('data:image/jpeg;base64,'):]
        fs.save(file_name,  ContentFile( base64.b64decode(data)))
        return Response(status= 200)

    def get(self, request, file_name):
        if(not file_name):
            return self.list_files(request)
        file_name = self.abs_get_file_name(file_name)
        fs = FileSystemStorage()
        obj = fs.open(file_name)
        response = Response(mimetype='image/jpg')
        response.status_code = 200
        response['Content-Disposition'] = 'attachment; filename={}.pdf'.format(request.GET('name'))
        response.write( obj.read())

    def list_files(self, request):
        files = self.get_file_list()
        return Response(data = files, status= 200)

        


