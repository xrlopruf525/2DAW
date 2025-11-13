from django import forms
from .models import Autor

class Autorform(forms.Form):
    nombre = forms.CharField(max_length=60, label="Nombre del autor: ")
    apellido = forms.CharField(max_length=100, label="Apellido del autor: ")
    edad = forms.IntegerField(max_value=120, label='Edad: ')

class AutorModelform(forms.ModelForm):
    class Meta:
        model = Autor
        fields = ['nombre' , 'apellido', 'edad']