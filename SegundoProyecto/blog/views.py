from django.shortcuts import render, get_object_or_404
from .models import Post

# Create your views here.
def principal(request):
    contexto = Post.objects.all()
    return render(request, 'blog/principal.html', {'posts': contexto})

def detalle_post(request, pk):
    contexto = get_object_or_404(Post, pk=pk)
    return render(request, 'blog/detalle_post.html', {'post': contexto})

