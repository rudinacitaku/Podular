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
    

'''#Vendor 
 class Vendor (models.Model):
    user= models.ForeignKey(User, on_delete=models.CASCADE)     
    address= models.TextField(null=True)

    def __str__(self):
        return self.user.username 
''' 
#Product
#class Product(models.Model):
  #  category=models.ForeignKey('ProductCategory',on_delete=models.SET_NULL,null=True, related_name='category_product')
  #  vendor=models.ForeignKey('Vendor',on_delete=models.SET_NULL,null=True)
   # title=models.CharField(max_length=200)
   ## detail=models.TextField(null=True)
   # price=models.FloatField()

   # def __str__(self):
   #       return self.title
    
#Product Category
#class PodcastCategory(models.Model):
   #   title=models.CharField(max_length=200)
      #detail=models.TextField(null=True)

      #def __str__(self):
      #    return self.title


#Product Rating and Reviews 
class PodcastRating(models.Model):
    customer=models.ForeignKey(Customer,on_delete=models.CASCADE,related_name='rating_customers')
    podcast=models.ForeignKey(Podcast,on_delete=models.CASCADE)
    rating=models.IntegerField()
    reviews=models.TextField()
    add_time=models.DateTimeField(auto_now_add=True)

    def __str__(self):
          return self.reviews

# Product Images Model
class PodcastImage(models.Model):
    podcast=models.ForeignKey(Podcast, on_delete=models.CASCADE,related_name='podcast_imgs')
    image=models.ImageField(upload_to='podcast_imgs/',null=True)
    
    def __str__(self):
          return self.image.url
