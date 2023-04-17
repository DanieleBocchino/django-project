from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Product
from .serializers import ProductSerializer
import json
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


@api_view(["POST"])
def createProduct(request):
    
    print(type(request.data))
    
    product = Product.objects.create(
        title=request.data.get("title"),
        img=request.data.get("img"),
        description=request.data.get("description"),
        price=request.data.get("price"),
    )
    serializer = ProductSerializer(product, many=False)

    return Response(serializer.data)


@api_view(["PUT"])
def updateProduct(request, pk):
    data = request.data
    product = Product.objects.get(id=pk)
    serializer = ProductSerializer(instance=product, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['DELETE'])
def deleteProduct(request, pk):
    product = Product.objects.get(id=pk)
    product.delete()

    return Response('Product Deleted')


""" {title: 'Sweet Glazed Salmon', img: 'https://www.allrecipes.com/thmb/lMZZ7cLL_Ujq0L6KG1…mon-4x3-1364-62077d9a52544229a9de5b55f0c13467.jpg', description: 'This salmon glaze recipe makes the most delicious …I made this recipe, and it is easily my favorite.', price: '25'} """