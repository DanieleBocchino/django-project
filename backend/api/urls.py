from django.urls import path

from . import views

urlpatterns = [
    path("", views.getRouters, name="routers"),
    path("products/", views.getProducts, name="products"),
    path("products/create/", views.createProduct, name="create-product"),
    path("products/<str:pk>/update/", views.updateProduct, name="update-product"),
    path("products/<str:pk>/delete/", views.deleteProduct, name="delete-product"),

]
