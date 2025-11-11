from django.shortcuts import render, get_object_or_404
from .models import Post, Autor

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





#Post.objects.order_by(titulo)
#Post.objects.filter(autor__icontains='Ruben')