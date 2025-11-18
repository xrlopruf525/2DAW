from django.shortcuts import render, get_object_or_404, redirect
from .models import Post, Autor
from .forms import Autorform, AutorModelform

# Create your views here.

def inicio(request):
    posts = Post.objects.all()
    autores = Autor.objects.all()
    contexto = {'posts': posts,  'autores':autores}


    return render(request, 'blog/inicio.html', contexto )

def detalle_post(request,pk):
    """entrada = Post.objects.get(pk=pk)
    contexto = {'entradas_pk':entrada}"""

    contexto = get_object_or_404(Post, pk=pk)

    return render(request, 'blog/detalle_post.html', {'entradas_pk' :contexto} )

def autor_post(request, autor_pk):

    autor = get_object_or_404(Autor, pk=autor_pk)
    entradas = Post.objects.filter(autor=autor)
    contexto ={'autor': autor, 'entradas': entradas}
    return render(request, 'blog/autor_post.html', contexto)

def autores(request):
    autores=Autor.objects.all()

    
    contexto ={'autores': autores}

    return render(request, 'blog/autores.html', contexto)

def autor_nuevo(request):
    if request.method == 'POST':
        form = AutorModelform(request.POST)

        if form.is_valid():
            #Almacenar en BD
            # nombre = form.cleaned_data['nombre']
            # apellido = form.cleaned_data['apellido']
            # edad = form.cleaned_data['edad']

            # Autor.objects.create(nombre = nombre ,apellido = apellido,edad = edad)
            form.save()
   
            return redirect('autores')
    else:
        form = AutorModelform()

    estado = 'crear'
        
    return render(request, 'blog/autor_nuevo.html',{'form':form, 'estado':estado})

def editar_autor(request, pk):

    autor = get_object_or_404(Autor, id=pk)

    if request.method == 'POST':
        form = AutorModelform(request.POST, instance=autor)
        if form.is_valid():
            form.save()
            return redirect('autores')
    else:
        form = AutorModelform(instance=autor)

    estado = 'editar'

    return render(request, 'blog/autor_nuevo.html', {'form': form, 'estado':estado})

def eliminar_autor(request,pk):
    autor = get_object_or_404(Autor, id=pk)

    if request.method == 'POST':
        autor.delete()
        return redirect('autores')
    else:
        return render(request, 'blog/eliminar_autor.html', {'autor': autor})
        




#Post.objects.order_by(titulo)
#Post.objects.filter(autor__icontains='Ruben')