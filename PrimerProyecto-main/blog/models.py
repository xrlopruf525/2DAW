from django.db import models

# Create your models here.
class Post(models.Model):
    titulo= models.CharField(max_length=200)
    autor= models.CharField(max_length=60)
    cuerpo=models.TextField()
    email = models.EmailField(default='ruben@gmail.com')

    def __str__(self):
        return f'({self.id}) {self.titulo}'