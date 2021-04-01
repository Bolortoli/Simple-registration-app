from django.shortcuts import render
from .models import InterestionIdeas
from .serializers import IdeaSerializer
from rest_framework import viewsets, permissions


class IdeasViewSet(viewsets.ModelViewSet):

    queryset = InterestionIdeas.objects.all().order_by('-id')
    permission_classes = [permissions.AllowAny]
    serializer_class = IdeaSerializer
    http_method_names = ['get', 'post', 'patch', 'delete']
