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
        
#Customer
class Customer(models.Model):
        user=models.ForeignKey(User,on_delete=models.CASCADE)
        mobile=models.PositiveBigIntegerField()

        def __str__ (self):
            return self.user.username
        
#Customer Address
class CustomerAddress(models.Model):
    customer=models.ForeignKey(Customer,on_delete=models.CASCADE,related_name='customer_addresses')
    address=models.TextField()
    default_address=models.BooleanField(default=False)

    def __str__(self):
          return self.address