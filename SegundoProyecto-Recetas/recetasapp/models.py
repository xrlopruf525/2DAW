from django.db import models

from django.core.exceptions import ValidationError

# Create your models here.


class Medida(models.TextChoices):
    GRAMOS = "g", "Gramos"
    KILOGRAMOS = "kg", "Kilogramos"
    LITROS = "l", "Litros"
    MILILITROS = "ml", "Mililitros"
    UNIDAD = "u", "Unidad"

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
    medida = models.CharField(
        max_length=5,
        choices=Medida.choices,
        default=Medida.GRAMOS
    )

    def clean(self):
        if self.nombre.lower() == "verdura":
            raise ValidationError("El nombre no puede ser una categoría")
        if self.categoria.nombre.lower() in ["prohibida", "genérica"]:
            raise ValidationError(f"La categoría '{self.categoria.nombre}' no está permitida")

    def __str__(self):
        return f'{self.nombre} ({self.categoria})'
    

class Receta(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    ingredientes = models.ManyToManyField(Ingredientes, related_name='recetas', through='IngredienteReceta')

    def __str__(self):
        return f'{self.nombre}'
    
class IngredienteReceta(models.Model):
    receta = models.ForeignKey(Receta, on_delete=models.CASCADE)
    ingrediente = models.ForeignKey(Ingredientes, on_delete=models.CASCADE)
    cantidad = models.FloatField()
    unidad_medida = models.CharField(max_length=2, choices=Medida)

    class Meta:
        unique_together = ('receta', 'ingrediente') 

    def __str__(self):
        return f'{self.receta} - {self.ingrediente.nombre}'
