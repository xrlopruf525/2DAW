from django.db import models

# Create your models here.
# class CategoriaChoices(models.TextChoices):
#     LEGUMBRES = "LE", "Legumbres"

class CategoriaIngrediente(models.Model):
    nombre = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.nombre}'
    
class Ingredientes(models.Model):
    nombre = models.CharField(max_length=50)
    categoria = models.ForeignKey('CategoriaIngrediente', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.nombre} ({self.categoria})'