from django.db import models
from django.contrib.auth.models import User


# Creator Model
class Creator (models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    mobile=models.PositiveBigIntegerField(unique=True, null=True)
    address=models.TextField(null=True)
    profile_img=models.ImageField(upload_to='seller/imgs/', null=True)

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
      
# Product Images Model
class PodcastImage(models.Model):
    podcast=models.ForeignKey(Podcast, on_delete=models.CASCADE,related_name='podcast_imgs')
    image=models.ImageField(upload_to='podcast_imgs/',null=True)
    
    def __str__(self):
          return self.image.url


#Product Rating and Reviews 
class ProductRating(models.Model):
    customer=models.ForeignKey(Customer,on_delete=models.CASCADE,related_name='rating_customers')
    product=models.ForeignKey(Product,on_delete=models.CASCADE)
    rating=models.IntegerField()
    reviews=models.TextField()
    add_time=models.DateTimeField(auto_now_add=True)

    def __str__(self):
          return self.reviews
