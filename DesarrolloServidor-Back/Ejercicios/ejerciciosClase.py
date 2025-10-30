numE=int(input("Cuantos elementos quieres introducir en la lista: "))
lista=[]
suma=[]
for i in range(0,numE):
    numL=int(input("Introduce numero: "))
    lista.append(numL)
print(lista)

print("La media de la lista es: ", sum(lista)/len(lista))

num=int(input("Introduzca el numero: "))
if num in lista:
    pos=lista.index(num)
    print("Esta en la posicion ",pos+1)
else: 
    print("No esta en la lista")
print(sorted(lista))

lista2=[4,6,8]
suma=lista+lista2
print(suma)