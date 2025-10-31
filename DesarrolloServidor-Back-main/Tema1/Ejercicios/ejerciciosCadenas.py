"""Crear un programa que lea por teclado una cadena y un carácter, e inserte el carácter entre cada letra de la cadena.
Ej: separar y , debería devolver s,e,p,a,r,a,r"""

cadena=input("Cadena: ")
caracter=input("Caracter: ")
print(caracter.join(cadena)) #Duda

"""Crear un programa que lea por teclado una cadena y un carácter, y reemplace todos los dígitos en la cadena por el carácter.
Ej: su clave es: 1540 y X debería devolver su clave es: XXXX"""
cadena1=input("Cadena: ")
caracter1=input("Caracter: ")
for i in cadena1:
    cadena1=cadena1.replace(str(i),caracter1)

print(cadena1)

#Crea un programa python que lea una cadena de caracteres y muestre la siguiente información:

#La primera letra de cada palabra. Por ejemplo, si recibe Universal Serial Bus debe devolver USB.
cadena2=input("Cadena: ")
lista=cadena2.split(" ")
for p in lista:
    print(p[0],end="")
print()

#Dicha cadena con la primera letra de cada palabra en mayúsculas. Por ejemplo, si recibe república argentina debe devolver República Argentina.
cadena3=input("Cadena: ")
cad3_1=cadena3.title()
print(cad3_1)
#Las palabras que comiencen con la letra A. Por ejemplo, si recibe Antes de ayer debe devolver Antes ayer
cadena4=input("Cadena: ")
lista2=cadena4.split(" ")
for c in lista2:
    if c.startswith("a") or c.startswith("A"):
        print (c,end=" ")
print()

"""Escribir funciones que dadas dos cadenas de caracteres:

Indique si la segunda cadena es una subcadena de la primera. Por ejemplo, cadena es una subcadena de subcadena.
Devuelva la que sea anterior en orden alfabético. Por ejemplo, si recibe kde y gnome debe devolver gnome."""
cad1=input("Cadena 1: ")
cad2=input("Cadena 2: ")
if(cad1.find(cad2)>-1):
    print("Cadena 2 es una subcadaena de cadena 1")
    print(cad2)
else:
    print("Cadena 2 No es una subcadena de cadena 1")
    print(cad1)


