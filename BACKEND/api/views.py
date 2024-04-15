from . import serializers
from rest_framework import generics, permissions 
from . import models


class CreatorList(generics.ListCreateAPIView):
    queryset=models.Creator.objects.all()
    serializer_class=serializers.CreatorSerializer

class CreatorDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Creator.objects.all()
    serializer_class=serializers.CreatorDetailSerializer

class PodcastList(generics.ListCreateAPIView):
    queryset=models.Podcast.objects.all()
    serializer_class=serializers.PodcastListSerializer

class PodcastDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Podcast.objects.all()
    serializer_class=serializers.PodcastDetailSerializer

class CustomerList(generics.ListCreateAPIView):
    queryset=models.Customer.objects.all()
    serializer_class=serializers.CustomerSerializer

class CustomerDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Customer.objects.all()
    serializer_class=serializers.CustomerDetailSerializer

    