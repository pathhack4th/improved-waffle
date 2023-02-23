from django.db import models
from django.conf import settings

class Incense(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    image = models.ImageField()

