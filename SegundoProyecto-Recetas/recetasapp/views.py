from django.shortcuts import render, redirect, get_object_or_404
from .forms import *
from .models import *
from django.forms import formset_factory, modelformset_factory
from django.views.generic import ListView, CreateView, DetailView, UpdateView, DeleteView
from django.urls import reverse_lazy

# Create your views here.
def inicio(request):
    return render(request, 'recetasapp/inicio.html')

# def ingredientes_lista(request):
#     ingredientes = Ingredientes.objects.all()
#     categorias = CategoriaIngrediente.objects.all()

#     categoria_filtro = request.GET.get('categoria')
#     if categoria_filtro:
#         ingredientes = ingredientes.filter(categoria=categoria_filtro)

#     refrigerado_filtro = request.GET.get('refrigerado')
#     if refrigerado_filtro:  
#         ingredientes = ingredientes.filter(refrigerado=True)

#     contexto = {'ingredientes': ingredientes, 'categorias':categorias}

#     return render(request, 'recetasapp/ingredientes_lista.html', contexto)

class IngredienteListView(ListView):
    model = Ingredientes
    template_name = 'recetasapp/ingredientes_lista.html'
    context_object_name = 'ingredientes'

def categoria_lista(request):
    categorias = CategoriaIngrediente.objects.all()
    contexto = {'categorias':categorias}
    return render(request, 'recetasapp/categoria_lista.html', contexto)


# def ingrediente_crear(request):
#     SetIngredienteFormSet = modelformset_factory(Ingredientes, form=SetIngredienteForm, extra=3)

#     if request.method == 'POST':
#         formset = SetIngredienteFormSet(request.POST)
#         if formset.is_valid():
#             # for form in formset:
#             #     if form.cleaned_data:
#             #         nombre = form.cleaned_data.get('nombre')
#             #         categoria = form.cleaned_data.get('categoria')
#             #         refrigerado = form.cleaned_data.get('refrigerado')

                   
#             #         Ingredientes.objects.create(
#             #             nombre=nombre,
#             #             categoria=categoria,
#             #             refrigerado=refrigerado
#             #         )  ESTE ES EL FORMSET
#             formset.save() # ESTO ES PARA EL MODELFORMSET
#             return redirect('ingredientes_lista')
#     else:
#         formset = SetIngredienteFormSet(queryset=Ingredientes.objects.none())

#     estado = 'crear'
#     return render(request, 'recetasapp/ingrediente_form.html', {'formset': formset, 'estado': estado})

class IngredienteNuevoView(CreateView):
    model = Ingredientes
    form_class = IngredienteForm
    template_name = 'recetasapp/ingrediente_form.html'
    success_url = reverse_lazy('ingredientes_lista')

def ingrediente_editar(request, pk):
    SetIngredienteFormSet = modelformset_factory(Ingredientes, form=SetIngredienteForm, extra=0)
    ingrediente = Ingredientes.objects.filter(pk=pk)
    
    if request.method == 'POST':
        formset = SetIngredienteFormSet(request.POST, queryset=ingrediente)
        if formset.is_valid():
            formset.save()
            return redirect('ingredientes_lista')
    else:
        formset = SetIngredienteFormSet(queryset=ingrediente)

    estado = 'editar'
    return render(request, 'recetasapp/ingrediente_form.html', {'formset': formset, 'estado': estado})

class IngredienteEditarView(UpdateView):
    model = Ingredientes
    form_class = IngredienteForm
    template_name = 'recetasapp/ingrediente_form.html'
    success_url = reverse_lazy('ingredientes_lista')

# def ingrediente_detalle(request, pk):
#     ingrediente = get_object_or_404(Ingredientes, pk=pk)
#     return render(request, 'recetasapp/ingrediente_detalle.html', {'ingrediente': ingrediente})

class IngredienteDetailView(DetailView):
    model = Ingredientes
    template_name = 'recetasapp/ingrediente_detalle.html'
    context_object_name = 'ingrediente'


def ingrediente_eliminar(request, pk):
    ingrediente = get_object_or_404(Ingredientes, pk=pk)
    if request.method == 'POST':
        ingrediente.delete()
        return redirect('ingredientes_lista')
    return render(request, 'recetasapp/ingrediente_eliminar.html', {'ingrediente': ingrediente})

class IngredienteEliminarView(DeleteView):
    model = Ingredientes
    template_name = 'recetasapp/ingrediente_eliminar.html'    
    success_url = reverse_lazy('ingredientes_lista')


def relaciones(request):
    recetas = Receta.objects.all()
    ingredientes = Ingredientes.objects.all()

    return render(request, 'recetasapp/relaciones.html', {'recetas':recetas, 'ingredientes':ingredientes})

def receta_detalle(request, pk):
    receta = get_object_or_404(Receta, pk=pk)
    ingredientes = Ingredientes.objects.all() 

    if request.method == 'POST':
        form = IngredienteRecetaForm(request.POST)
        ingrediente_pk = request.POST.get('ingrediente')  
        ingrediente = get_object_or_404(Ingredientes, pk=ingrediente_pk)

        if form.is_valid():
            form.instance.receta = receta
            form.save()
            return redirect('receta_detalle', pk=pk)
    else:
        form = IngredienteRecetaForm()

    return render(request, 'recetasapp/receta_detalle.html', {
        'receta': receta,
        'ingredientes': ingredientes,
        'form': form,
        'estado': 'crear'
    })

def receta_modificar_ingrediente(request, receta_pk, ingrediente_pk):
    receta = get_object_or_404(Receta, pk=receta_pk)
    ingrediente_receta = get_object_or_404(
        IngredienteReceta,
        receta=receta,
        ingrediente_id=ingrediente_pk
    )

    if request.method == 'POST':
        form = IngredienteRecetaForm(request.POST, instance=ingrediente_receta)
        if form.is_valid():
            form.save()
            return redirect('receta_detalle', pk=receta_pk)
    else:
        form = IngredienteRecetaForm(instance=ingrediente_receta)

    return render(request, 'recetasapp/receta_detalle.html', {
        'receta': receta,
        'ingrediente_receta': ingrediente_receta,
        'form': form,
        'estado': 'editar'
    })


def receta_quitar_ingrediente(request, receta_pk, ingrediente_pk):
    receta = get_object_or_404(Receta, pk=receta_pk)
    ingrediente = get_object_or_404(Ingredientes, pk=ingrediente_pk)

    receta.ingredientes.remove(ingrediente)

    return redirect('receta_detalle', pk=receta_pk)





