from django.shortcuts import render, redirect, get_object_or_404
from .forms import *
from .models import Ingredientes, CategoriaIngrediente
from django.forms import formset_factory

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

def categoria_lista(request):
    categorias = CategoriaIngrediente.objects.all()


    contexto = {'categorias':categorias}

    return render(request, 'recetasapp/categoria_lista.html', contexto)


def ingrediente_crear(request):
    if request.method == 'POST':
        form = IngredienteForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('ingredientes_lista')
    else:
        form = IngredienteForm()
    estado = 'crear'
    return render(request, 'recetasapp/ingrediente_form.html', {'form': form, 'estado': estado})


def ingrediente_editar(request, pk):
    ingrediente = get_object_or_404(Ingredientes, pk=pk)
    if request.method == 'POST':
        form = IngredienteForm(request.POST, instance=ingrediente)
        if form.is_valid():
            form.save()
            return redirect('ingredientes_lista')
    else:
        form = IngredienteForm(instance=ingrediente)
    estado = 'editar'
    return render(request, 'recetasapp/ingrediente_form.html', {'form': form, 'estado': estado})

def ingrediente_detalle(request, pk):
    ingrediente = get_object_or_404(Ingredientes, pk=pk)
    return render(request, 'recetasapp/ingrediente_detalle.html', {'ingrediente': ingrediente})

def ingrediente_eliminar(request, pk):
    ingrediente = get_object_or_404(Ingredientes, pk=pk)
    if request.method == 'POST':
        ingrediente.delete()
        return redirect('ingredientes_lista')
    return render(request, 'recetasapp/ingrediente_eliminar.html', {'ingrediente': ingrediente})

