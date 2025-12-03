from django import forms
from .models import Ingredientes, Receta, IngredienteReceta

class IngredienteForm(forms.ModelForm):
    class Meta:
        model = Ingredientes
        fields = ['nombre', 'categoria', 'refrigerado', 'medida']

    def clean_nombre(self):
        nombre = self.cleaned_data['nombre']
        if nombre.lower() == "verdura":
            raise forms.ValidationError("El nombre no puede ser una categoría")
        return nombre

    def clean(self):
        cleaned_data = super().clean()
        categoria = cleaned_data.get('categoria')
        if categoria and categoria.nombre.lower() in ["prohibida", "genérica"]:
            raise forms.ValidationError(f"La categoría '{categoria.nombre}' no está permitida")
        return cleaned_data
    

class SetIngredienteForm(forms.ModelForm):
    class Meta:
        model = Ingredientes
        fields = ['nombre', 'categoria', 'refrigerado', 'medida']


class IngredienteRecetaForm(forms.ModelForm):
     class Meta:
        model = IngredienteReceta
        fields = ['ingrediente', 'cantidad', 'unidad_medida']
