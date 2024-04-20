from django.urls import path
from . import views
from rest_framework import routers


router=routers.DefaultRouter()
router.register('address', views.CustomerAddressViewSet)

urlpatterns = [
    path('creators/', views.CreatorList.as_view()),
    path('creators/<int:pk>', views.CreatorDetails.as_view()),
    path('podcasts/', views.PodcastList.as_view()),
    path('podcast/<int:pk>', views.PodcastDetails.as_view()),
    #customers
    path('customers/', views.CustomerList.as_view()),
    path('customers/<int:pk>', views.CustomerDetails.as_view()),
    path('customers/<int:pk>/address-list', views.CustomerAddressList.as_view()),
     path('mark-default-address/<int:pk>', views.mark_default_address,name='mark_default_address'),
    
]

urlpatterns+=router.urls