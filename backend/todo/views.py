from django.shortcuts import render, HttpResponse
from .models import Task, Category
from .serializers import TaskSerializer, CategorySerializer
from rest_framework import generics

# Create your views here.
class TaskList(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class TaskDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    
def home(request):
    return HttpResponse("TODO List - API rest in Django")