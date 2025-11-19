from django.db import models

from django.core.exceptions import ValidationError

# Create your models here.
# class CategoriaChoices(models.TextChoices):
#     LEGUMBRES = "LE", "Legumbres"

class CategoriaIngrediente(models.Model):
    nombre = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.nombre}'
    
def validate_nombre(value):
    if value.lower() == "verdura":
        raise ValidationError("El nombre no puede ser una categoría")
    
class Ingredientes(models.Model):
    nombre = models.CharField(max_length=50, validators=[validate_nombre])
    categoria = models.ForeignKey('CategoriaIngrediente', on_delete=models.CASCADE)
    refrigerado = models.BooleanField(default=False)

    def clean(self):
        if self.nombre.lower() == "verdura":
            raise ValidationError("El nombre no puede ser una categoría")
        if self.categoria.nombre.lower() in ["prohibida", "genérica"]:
            raise ValidationError(f"La categoría '{self.categoria.nombre}' no está permitida")

    def __str__(self):
        return f'{self.nombre} ({self.categoria})'