from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from . import serializers
from rest_framework import generics, permissions, viewsets
from . import models
from django.db import IntegrityError
from django.contrib.auth.models import User 


class CreatorList(generics.ListCreateAPIView):
    queryset=models.Creator.objects.all()
    serializer_class=serializers.CreatorSerializer

class CreatorDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Creator.objects.all()
    serializer_class=serializers.CreatorDetailSerializer

class PodcastList(generics.ListCreateAPIView):
    queryset=models.Podcast.objects.all()
    serializer_class=serializers.PodcastListSerializer

class PodcastDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Podcast.objects.all()
    serializer_class=serializers.PodcastDetailSerializer

#Customers
class CustomerList(generics.ListCreateAPIView):
    queryset=models.Customer.objects.all()
    serializer_class=serializers.CustomerSerializer

class CustomerDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Customer.objects.all()
    serializer_class=serializers.CustomerDetailSerializer

class CustomerAddressViewSet(viewsets.ModelViewSet):
    serializer_class=serializers.CustomerAddressSerializer
    queryset=models.CustomerAddress.objects.all()

class CustomerAddressList(generics.ListAPIView):
    queryset=models.CustomerAddress.objects.all()
    serializer_class=serializers.CustomerAddressSerializer

    def get_queryset(self):
        qs=super().get_queryset()
        customer_id=self.kwargs['pk']
        qs=qs.filter(customer_id=customer_id).order_by('id')
        return qs
    
@csrf_exempt
def mark_default_address(request,pk):
    if request.method=='POST':
        address_id=request.POST.get('address_id')
        models.CustomerAddress.objects.all().update(default_address=False)
        res=models.CustomerAddress.objects.filter(id=address_id).update(default_address=True)
        msg={
            'bool':False
        }
        if res:
            msg={
            'bool':True
        }
    return JsonResponse(msg)
    
@csrf_exempt
def creator_register(request):
    if request.method == "POST":
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        mobile = request.POST.get('mobile')
        email = request.POST.get('email')
        address = request.POST.get('address')
        username = request.POST.get('username')
        password = request.POST.get('password')

        try:
            # Create user with hashed password and other relevant fields
            user = User.objects.create_user(
                first_name=first_name,
                last_name=last_name,
                email=email,
                username=username,
                password=password  # Automatically hashes the password
            )
            # Create the creator profile linked to the user
            creator = models.Creator.objects.create(
                user=user,
                mobile=mobile,
                address=address
            )
            return JsonResponse({
                'bool': True,
                'user': user.id,
                'creator': creator.id,
                'msg': 'You have successfully registered. You can log in now!'
            })

        except IntegrityError as e:
            if 'username' in str(e):
                return JsonResponse({
                    'bool': False,
                    'msg': 'Username already exists!'
                })
            elif 'mobile' in str(e):
                return JsonResponse({
                    'bool': False,
                    'msg': 'Mobile already is registered!'
                })
            else:
                return JsonResponse({
                    'bool': False,
                    'msg': 'Something went wrong!'
                }, status=400)

    return JsonResponse({
        'bool': False,
        'msg': 'Invalid request'
    }, status=400)