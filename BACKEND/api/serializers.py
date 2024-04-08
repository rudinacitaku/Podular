from rest_framework import serializers
from . import models

class CreatorSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Creator
        fields=['user', 'address']

    def __init__ (self, *args, **kwargs):
        super(CreatorSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class CreatorDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Creator
        fields=['id','user', 'address']

    def __init__ (self, *args, **kwargs):
        super(CreatorDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1