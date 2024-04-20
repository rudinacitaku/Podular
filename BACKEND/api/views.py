from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from . import serializers
from rest_framework import generics, permissions, viewsets
from . import models


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
    