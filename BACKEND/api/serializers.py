from rest_framework import serializers
from . import models

class CreatorSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Creator
        fields=['user', 'address']  #edhe 'id' ne vid?

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
        
class PodcastListSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Podcast
        fields=['id','title', 'detail']

    def __init__ (self, *args, **kwargs):
        super(PodcastListSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class PodcastDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Podcast
        fields=['id','title', 'detail']

    def __init__ (self, *args, **kwargs):
        super(PodcastListSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1
#Customer
class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Customer
        fields=['id','user', 'mobile']

    def __init__ (self, *args, **kwargs):
        super(CustomerSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class CustomerDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Customer
        fields=['id','user', 'mobile']

    def __init__ (self, *args, **kwargs):
        super(CustomerDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1
 
#Order

#Customer Address
class CustomerAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.CustomerAddress
        fields=['id', 'customer', 'address', 'default_address']
    
    def __init__(self, *args, **kwargs):
        super(CustomerAddressSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1