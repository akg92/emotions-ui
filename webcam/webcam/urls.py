"""webcam URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from capture.template.upload import FileUpload
from capture.template.match import Match
from capture.template.select import Select
urlpatterns = [
    path('admin/', admin.site.urls),
    path('upload/', FileUpload.as_view() ),
    path('upload/<str:file_name>', FileUpload.as_view() ),
    path('match/<str:file_name>', Match.as_view()),
    path('select/', Select.as_view()),
    path('select/<str:file_name>', Select.as_view())


]
