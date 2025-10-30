#Lee por teclado números y guardalo en una lista, el proceso finaliza cuando metamos un número negativo.
#Muestra el máximo de los números guardado en la lista, muestra los números pares.

num = int(input("Introduce un numero: "))
lista=[]
while(num>=0):
    lista.append(num)
    num = int(input("Introduce un numero: "))
if(lista):
    print(f'El maximo es: {max(lista)}')
    for p in lista:
        if p%2 == 0:
            print(p, end="")

print()
#Realizar un programa que, dada una lista, devuelva una nueva lista cuyo contenido sea igual a la original pero invertida. 
# Así, dada la lista [‘Di’, ‘buen’, ‘día’, ‘a’, ‘papa’], deberá devolver [‘papa’, ‘a’, ‘día’, ‘buen’, ‘Di’].

lista2=['Di', 'buen', 'dia', 'a', 'papa']
lista2.reverse()
print(lista2)
print()

#Dada una lista de cadenas, pide una cadenena por teclado e indica si está en la lista, indica cuantas veces aparece en la lista, 
#lee otra cadena y sustituye la primera por la segunda en la lista, y por último borra la cadena de la lista
lista3=lista2

cadena=input("Introduce la cadena: ")
if cadena in lista3:
    print("La cadena esta en la lista") 
    print(f'La cadena aparece: {lista3.count(cadena)}')
else:
    print("La cadena no esta en la lista")

cadena2=input("Introduce la cadena a remplazar: ")
pos=0
for i in range(pos,lista3.count(cadena)):
    pos=lista3.index(cadena,pos)
    lista3[pos]=cadena2
print(lista3)

print()

#Dado una lista, hacer un programa que indique si está ordenada o no.
lista4=[1,2,5,4]

if lista4==sorted(lista4):
	print("Lista ordenada")   
else:
	print("Lista no ordenada")







