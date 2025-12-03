from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(CategoriaIngrediente)
admin.site.register(Ingredientes)
admin.site.register(Receta)
admin.site.register(IngredienteReceta)
