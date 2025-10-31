# listaVideojuegos=[]
# numE=int(input("Cuantos videojuegos quieres introducir: "))

# for i in range(0,numE):
    
#     nombre=input("Introduce el nombre del videojuego: ")
#     valoracion=int(input(f'Introduce la valoracion del videojuego {nombre}: ' ))
#     categoria=input(f'Introduce la categoria del videojuego {nombre}: ' )

#     videojuego={"nombre":nombre,"valoracion":valoracion,"categoria":categoria}

#     listaVideojuegos.append(videojuego)

# print(listaVideojuegos)

# suma=0
# for video in listaVideojuegos:
#     print("Nombre: ",video["nombre"])
#     suma+=video["valoracion"]

# print("La media es: ", suma/len(listaVideojuegos))

# #Modificar para una lista con todos los nombres y otra lista para todas las valoraciones, en una linea(list compresion), la media

# listaNombres = [video["nombre"] for video in listaVideojuegos]
# listaVal = [video["valoracion"] for video in listaVideojuegos]

# print(listaNombres)
# print(listaVal)
# print(f'La media de las valoraciones es: {sum(listaVal)/len(listaVal)}')

asignatura1 = {"nombre":"servidor","profesor":"JI","horas":7}
asignatura2 = {"nombre":"cliente","profesor":"david","horas":6}
notas={"mates":9,"ser":4,"cliente":8,"BBDD":6}

alumnos=[]
numE=int(input("Cuantos alumnos quieres introducir: "))

for i in range(numE):
    nombre=input("Introduce el nombre del alumno: ")
    edad=int(input(f'Introduce la edad de {nombre}: ' ))
    persona={"nombre":nombre, "edad":edad,"asignaturas":[asignatura1,asignatura2],"notas":{"Cliente":4,"IPE":2}}
    alumnos.append(persona)


suma=0
suspensos=[]
for i in alumnos:
    x=list(i["notas"].values())
    print((x))

    suspensos={nombre:nota for nombre,nota in i["notas"].items() if nota<5}
    print(suspensos)
    # for nom,nota in i["notas"].items():
    #     if(nota)<5:
    #         print(nom ,": ",nota)
    
