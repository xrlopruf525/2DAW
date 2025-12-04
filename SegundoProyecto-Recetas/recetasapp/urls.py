from django.urls import path
from . import views

urlpatterns = [
    path('', views.inicio, name='inicio'),
    path('relaciones', views.relaciones, name='relaciones'),
    path('receta/<int:pk>', views.receta_detalle, name='receta_detalle'),
    path('receta/<int:receta_pk>/quitar_ingrediente/<int:ingrediente_pk>', views.receta_quitar_ingrediente, name='receta_quitar_ingrediente'),    
    path('receta/<int:receta_pk>/modificar_ingrediente/<int:ingrediente_pk>', views.receta_modificar_ingrediente, name='receta_modificar_ingrediente'),    
    path('ingredientes', views.IngredienteListView.as_view(), name='ingredientes_lista'),
    path('categorias', views.categoria_lista, name='categoria_lista'),
    path('ingredientes/crear/', views.IngredienteNuevoView.as_view(), name='ingrediente_crear'),
    path('ingredientes/<int:pk>/editar/', views.IngredienteEditarView.as_view(), name='ingrediente_editar'),
    path('ingredientes/<int:pk>/eliminar/', views.IngredienteEliminarView.as_view(), name='ingrediente_eliminar'),
    path('ingredientes/<int:pk>/', views.IngredienteDetailView.as_view(), name='ingrediente_detalle'),
]