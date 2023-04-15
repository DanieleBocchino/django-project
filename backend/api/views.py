from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Product
from .serializers import ProductSerializer

# Create your views here.


@api_view(["GET"])
def getRouters(request):
    routes = []

    return Response(routes)


@api_view(["GET"])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)

    return Response(serializer.data)


@api_view(["GET"])
def getProduct(request, pk):
    
    params = request.GET.get("id")
    
    products = Product.objects.get(id=pk)
    serializer = ProductSerializer(products, many=False)

    return Response(serializer.data)
