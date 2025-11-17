
from django.urls import path, include
from . import views
urlpatterns = [
    path('', views.principal, name='principal' ),
    path('<int:pk>', views.detalle_post, name='detalle_post')
]
