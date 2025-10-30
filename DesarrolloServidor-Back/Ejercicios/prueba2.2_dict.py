listaVideojuegos=[]
numE=int(input("Cuantos videojuegos quieres introducir: "))

for i in range(0,numE):
    
    nombre=input("Introduce el nombre del videojuego: ")
    valoracion=int(input(f'Introduce la valoracion del videojuego {nombre}: ' ))
    categoria=input(f'Introduce la categoria del videojuego {nombre}: ' )

    videojuego={"nombre":nombre,"valoracion":valoracion,"categoria":categoria}

    listaVideojuegos.append(videojuego)

print(listaVideojuegos)

suma=0
for video in listaVideojuegos:
    print("Nombre: ",video["nombre"])
    suma+=video["valoracion"]

print("La media es: ", suma/len(listaVideojuegos))

#Modificar para una lista con todos los nombres y otra lista para todas las valoraciones, en una linea(list compresion), la media