from django.db import models

class BookModel(models.Model):
    bISBN = models.CharField(max_length=32,primary_key = True)
    bTitle = models.CharField(max_length=128,null = True)
    bAuthor = models.CharField(max_length=128)
    bPrice = models.FloatField()
