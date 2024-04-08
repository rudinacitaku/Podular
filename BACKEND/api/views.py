from . import serializers
from rest_framework import generics, permissions 
from . import models


class CreatorList(generics.ListCreateAPIView):
    queryset=models.Creator.objects.all()
    serializer_class=serializers.CreatorSerializer
   # permission_classes=[permissions.IsAuthenticated]

class CreatorDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Creator.objects.all()
    serializer_class=serializers.CreatorDetailSerializer
   # permission_classes=[permissions.IsAuthenticated]
