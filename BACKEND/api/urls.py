from django.urls import path
from . import views

urlpatterns = [
    path('creators/', views.CreatorList.as_view()),
    path('creators/<int:pk>', views.CreatorList.as_view())
]
