from django.db import models

# Create your models here.
class Api(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title
    
class Product(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(null=True, blank=True)
    price = models.FloatField(default=0.0)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title