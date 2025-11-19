from django.shortcuts import render

from .models import Ingredientes, CategoriaIngrediente

# Create your views here.
def inicio(request):
    return render(request, 'recetasapp/inicio.html')

def ingredientes_lista(request):
    ingredientes = Ingredientes.objects.all()
    categorias = CategoriaIngrediente.objects.all()

    categoria_filtro = request.GET.get('categoria')
    if categoria_filtro:
        ingredientes = ingredientes.filter(categoria=categoria_filtro)

    refrigerado_filtro = request.GET.get('refrigerado')
    if refrigerado_filtro:  
        ingredientes = ingredientes.filter(refrigerado=True)

    contexto = {'ingredientes': ingredientes, 'categorias':categorias}

    return render(request, 'recetasapp/ingredientes_lista.html', contexto)
