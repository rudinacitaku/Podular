from django.db import models
from django.contrib.auth.models import User


# Creator Model
class Creator (models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    address=models.TextField(null=True)

    def __str__ (self):
            return self.user.username
#Category
    class PodcastCategory (models.Model):
        title=models.CharField(max_length=200)
        detail=models.TextField(null=True)

        def __str__ (self):
            return self.title
        
#Podcast 
    class Podcast (models.Model):
        title=models.CharField(max_length=200)
        detail=models.TextField(null=True)

        def __str__ (self):
            return self.title