videojuegos=["Zelda", "FIFA", "Minecraft", "Call of Duty", "Animal Crossing"]
valoraciones=[]
videojuegosMayor=[]

for i in videojuegos:
        val=float(input(f'Introduce la valoracion del videojuego {i}: ' ))
        while(val>10 or val<1):
            print("Error, introduce un numero del 1 al 10")
            val=float(input(f'Introduce la valoracion del videojuego {i}: ' ))
   
valoraciones.append(val)

if(len(valoraciones)==0):
    print("No hay datos")
else:
    for i in range(len(videojuegos)):
        print(videojuegos[i], " su valoracion: ",valoraciones[i])
        if valoraciones[i] >= 8:
            videojuegosMayor.append(videojuegos[i])
    print("La media de la lista es: ", sum(valoraciones)/len(valoraciones))
    print("El videojuego con mayor valoracion es: ", videojuegos[valoraciones.index(max(valoraciones))])
    print("El videojuego con menos valoracion es: ", videojuegos[valoraciones.index(min(valoraciones))])
    print("Numero de juegos mayores a 8: ",len(videojuegosMayor)," y son: ", videojuegosMayor)

"""
videojuegos=["Zelda", "FIFA", "Minecraft", "Call of Duty", "Animal Crossing"]
valoraciones=[]

print("Introduce una valoración (1-10) para cada videojuego")

for i in videojuegos:

    while True:
        try:
            nota = int(input(f"Valor del videojuego {i}:"))
            if 1<= nota <=10:
                valoraciones.append(nota)
                break
            else:
                print("Debes introducir un valor entre el 1 y el 10")
        except ValueError:
            print("Eres muy malo, introduce un número")

if valoraciones:
    print("Resultados de las valoraciones")
    for juego, nota in zip(videojuegos, valoraciones):
         print(f"Videojuego {juego} - {nota}")

    media = sum(valoraciones)/len(valoraciones)
    print(f"La media de las valoraciones de todos los videojuegos es {media}")
    
    
    destacados = [i for i in valoraciones if i>=8]

    print(f"El número de videojuegos con valoración mayor o igual a 8 es {len(destacados)}")

    max_nota = max(valoraciones)
    min_nota = min(valoraciones)
    juego_mejor = videojuegos[valoraciones.index(max_nota)]
    juego_peor = videojuegos[valoraciones.index(min_nota)]

    print(f"Juego mejor valorado: {juego_mejor}")
    print(f"Juego peor valorado: {juego_peor}")
else:
    print("Valor introducido incorrecto")"""