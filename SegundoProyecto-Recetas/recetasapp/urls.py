from django.urls import path
from . import views

urlpatterns = [
    path('', views.inicio, name='inicio'),
    path('relaciones', views.relaciones, name='relaciones'),
    path('receta/<int:pk>', views.receta_detalle, name='receta_detalle'),
    path('receta/<int:receta_pk>/quitar_ingrediente/<int:ingrediente_pk>', views.receta_quitar_ingrediente, name='receta_quitar_ingrediente'),    
    path('ingredientes', views.ingredientes_lista, name='ingredientes_lista'),
    path('categorias', views.categoria_lista, name='categoria_lista'),
    path('ingredientes/crear/', views.ingrediente_crear, name='ingrediente_crear'),
    path('ingredientes/<int:pk>/editar/', views.ingrediente_editar, name='ingrediente_editar'),
    path('ingredientes/<int:pk>/eliminar/', views.ingrediente_eliminar, name='ingrediente_eliminar'),
    path('ingredientes/<int:pk>/', views.ingrediente_detalle, name='ingrediente_detalle'),
]