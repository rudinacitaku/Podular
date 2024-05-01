from django.urls import path
from . import views
from .views import creator_register
from rest_framework import routers


router=routers.DefaultRouter()
router.register('address', views.CustomerAddressViewSet)
router.register('productrating', views.ProductRatingViewSet)

urlpatterns = [
    #Creators
    path('creator/', views.CreatorList.as_view()),
    path('creators/<int:pk>', views.CreatorDetails.as_view()),
    path('creators/register', creator_register, name='creator_register'),
    path('creators/login', views.creator_login, name='creator_login'),
    #Vendors 
    path('vendors/', views.VendorList.as_view()),
    path('vendor/<int:pk>', views.VendorDetails.as_view()),
    #Products 
    path('products/', views.ProductList.as_view()),
    path('product/<int:pk>', views.ProductDetails.as_view()),
    #Product Categories 
    path('categories/', views.CategoryList.as_view()),
    path('category/<int:pk>', views.CategoryDetail.as_view()),
    #Podcasts
    path('podcasts/', views.PodcastList.as_view()),
    path('podcast/<int:pk>', views.PodcastDetails.as_view()),
    path('podcast-imgs/', views.PodcastImgsList.as_view()),
    path('podcast-imgs/<int:podcast_id>', views.PodcastImgsDetail.as_view()),
    path('podcast-img/<int:pk>', views.PodcastImgDetail.as_view()),
    #customers
    path('customers/', views.CustomerList.as_view()),
    path('customers/<int:pk>', views.CustomerDetails.as_view()),
    path('customers/<int:pk>/address-list', views.CustomerAddressList.as_view()),
    path('mark-default-address/<int:pk>', views.mark_default_address,name='mark_default_address'),
    
]

urlpatterns+=router.urls
