from django import forms

class Autoform(forms.Form):
    nombre = forms.CharField(max_length=60, label="Nombre del autor: ")
    apellido = forms.CharField(max_length=100, label="Apellido del autor: ")
    edad = forms.IntegerField(max_value=120, label='Edad: ')