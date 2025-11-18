from django.shortcuts import render

from .models import Ingredientes

# Create your views here.
def inicio(request):
    return render(request, 'recetasapp/inicio.html')

def ingredientes_lista(request):
    ingredientes = Ingredientes.objects.all()

    return render(request, 'recetasapp/ingredientes_lista', {'ingredientes': ingredientes})
