from django.db import models

class Autor(models.Model):
    nombre = models.CharField(max_length=60)
    apellido = models.CharField(max_length=60)
    edad = models.IntegerField()

    def __str__(self):
        return f"{self.nombre} {self.apellido}"

class Post(models.Model):
    titulo = models.CharField(max_length=200)
    autor = models.ForeignKey(Autor)
    cuerpo = models.TextField()
    email = models.EmailField(default='ruben@gmail.com')

    def __str__(self):
        return f"({self.id}) {self.titulo} - {self.autor}"