from django.urls import path
from . import views
from .views import creator_register
from rest_framework import routers


router=routers.DefaultRouter()
router.register('address', views.CustomerAddressViewSet)

urlpatterns = [
    #Creators
    path('creators/', views.CreatorList.as_view()),
    path('creators/<int:pk>', views.CreatorDetails.as_view()),
    path('creators/register', creator_register, name='creator_register'),
    path('creators/login', views.creator_login, name='creator_login'),
    #Podcasts
    path('podcasts/', views.PodcastList.as_view()),
    path('podcast/<int:pk>', views.PodcastDetails.as_view()),
    path('podcast-imgs/', views.PodcastImgsList.as_view()),
    path('podcast-imgs/<int:podcast_id>', views.PodcastImgsDetail.as_view()),
    #customers
    path('customers/', views.CustomerList.as_view()),
    path('customers/<int:pk>', views.CustomerDetails.as_view()),
    path('customers/<int:pk>/address-list', views.CustomerAddressList.as_view()),
    path('mark-default-address/<int:pk>', views.mark_default_address,name='mark_default_address'),
    
]

urlpatterns+=router.urls