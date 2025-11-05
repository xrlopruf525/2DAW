from django.shortcuts import render, get_object_or_404
from .models import Post

# Create your views here.

def inicio(request):
    entradas = Post.objects.all()
    entradas_ruben = Post.objects.filter(autor='Ruben')
    entrada_orderTitulo = Post.objects.order_by('titulo')
    contexto = {'entradas': entradas, 'entradas_ruben': entradas_ruben, 'titulos_ord':entrada_orderTitulo}


    return render(request, 'blog/inicio.html', contexto )

def detalle_post(request,pk):
    """entrada = Post.objects.get(pk=pk)
    contexto = {'entradas_pk':entrada}"""

    contexto = get_object_or_404(Post, pk=pk)

    return render(request, 'blog/detalle_post.html', {'entradas_pk' :contexto} )



#Post.objects.order_by(titulo)
#Post.objects.filter(autor__icontains='Ruben')