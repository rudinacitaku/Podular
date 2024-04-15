from django.urls import path
from . import views

urlpatterns = [
    path('creators/', views.CreatorList.as_view()),
    path('creators/<int:pk>', views.CreatorDetails.as_view()),
    path('podcasts/', views.PodcastList.as_view()),
    path('podcast/<int:pk>', views.PodcastDetails.as_view()),
    path('customers/', views.CustomerList.as_view()),
    path('customers/<int:pk>', views.CustomerDetails.as_view()),
]
