from rest_framework import serializers
from . import models
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

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
        

class PodcastImageSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.PodcastImage
        fields=['id','podcast', 'image']

class PodcastListSerializer(serializers.ModelSerializer):
    product_ratings=serializers.StringRelatedField(many=True, read_only=True)
    podcast_imgs=PodcastImageSerializer(many=True, read_only=True)
    class Meta:
        model=models.Podcast
        fields=['id','category','creator', 'title','detail','product_ratings','image']

    def __init__ (self, *args, **kwargs):
        super(PodcastListSerializer, self).__init__(*args, **kwargs)
        #    self.Meta.depth = 1
        
class PodcastDetailSerializer(serializers.ModelSerializer):
    product_ratings=serializers.StringRelatedField(many=True, read_only=True)
    class Meta:
        model=models.Podcast
        fields=['id','category','creator','title', 'detail', 'product_ratings']

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
 
#Subscription
class SubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Subscription
        fields=['id','user'] 

    def __init__ (self, *args, **kwargs):
        super(SubscriptionSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class SubscriptionPodcastsSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.SubscriptionPodcasts
        fields=['id','subscription', 'user'] 

    def __init__ (self, *args, **kwargs):
        super(SubscriptionPodcastsSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


#Customer Address
class CustomerAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.CustomerAddress
        fields=['id', 'customer', 'address', 'default_address']
    
    def __init__(self, *args, **kwargs):
        super(CustomerAddressSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers

class AdminTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['username'] = user.username
        token['is_staff'] = user.is_staff
        token['is_superuser'] = user.is_superuser
        return token

    def validate(self, attrs):
        data = super().validate(attrs)
        data.update({
            'username': self.user.username,
            'is_staff': self.user.is_staff,
            'is_superuser': self.user.is_superuser
        })
        if not self.user.is_staff:
            raise serializers.ValidationError('You must be a staff member to log in.')
        return data
#Admin

#Podcast Categories
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=models.PodcastCategory 
        fields=['id','title', 'detail']  

    def __init__ (self, *args, **kwargs):
        super(CategorySerializer, self).__init__(*args, **kwargs)
        #self.Meta.depth = 1

class CategoryDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.PodcastCategory
        fields=['id','title', 'detail']

    def __init__ (self, *args, **kwargs):
        super(CategoryDetailSerializer, self).__init__(*args, **kwargs)
        #self.Meta.depth = 1
        
# Product Rating and Reviews 
class PodcastRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.PodcastRating
        fields=['id', 'customer', 'podcast', 'rating','reviews','add_time']
    
    def __init__(self, *args, **kwargs):
        super(PodcastRatingSerializer, self).__init__(*args, **kwargs)
        #self.Meta.depth = 1
