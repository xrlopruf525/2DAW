# -----------------------------
# Gestión de Biblioteca Digital
# -----------------------------

# Funciones
import json


def mostrar_libros(biblioteca):
    # Recorre la lista y muestra la información de cada libro
    for l in biblioteca:
        print(f'Titulo: {l["titulo"]} -Autor: {l["autor"]} -Anio: {l["anio"]} -Genero: {l["genero"]} -Prestamos: {l["prestamos"]}')



def buscar_por_autor(biblioteca, autor):
    # Devuelve una lista con los títulos de un autor dado
    resultado=[]
    for l in biblioteca:
        if l["autor"] == autor:
            resultado.append(l["titulo"])
    return resultado



def prestamo(biblioteca, titulo, usuario):
    # Registra un préstamo de un libro por un usuario
    for l in biblioteca:
        if l["titulo"] == titulo:
            if usuario in l["prestamos"]:
                l["prestamos"][usuario]+=1
            else:
                l["prestamos"][usuario]=1 

                    
                    

                    


def libro_mas_popular(biblioteca):
    # Devuelve el libro con más préstamos totales
    MayorPres=0
    suma=0
    for l in biblioteca:
        suma=0
        for pres in l["prestamos"].values():
            suma+=pres
        if(suma>MayorPres):
            MayorPres=suma
            libro=l["titulo"]
    return libro


def estadisticas_usuarios(biblioteca):
    #Devuelve un diccionario con total de préstamos por usuario
    usuarios={}
    for l in biblioteca:
        for usu,pres in l["prestamos"].items():
            if usu in usuarios:
                usuarios[usu]+=pres
            else:
                usuarios[usu]=pres
    return usuarios

def guardar_biblioteca(biblioteca, fichero):
    with open(fichero, "w", encoding="utf-8") as f:
        json.dump(biblioteca, f, indent=4, ensure_ascii=False)
    print("Se han cargado correctamente")    

def cargar_biblioteca(ficheroLeer):
    try:
        with open(ficheroLeer+".json", "r", encoding="utf-8") as f:
            biblioteca = json.load(f)
        return biblioteca
    except FileNotFoundError:
        print("No existe el archivo")




# Programa principal
def main():
    # 1. Crear biblioteca con al menos 5 libros
    biblioteca = [
        {
            "titulo": "Cien años de soledad",
            "autor": "Gabriel García Márquez",
            "anio": 1967,
            "genero": "Novela",
            "prestamos": {"Ruben":2,"Andrea":1}
        },
        {
            "titulo": "El Quijote",
            "autor": "Miguel de Cervantes",
            "anio": 1605,
            "genero": "Novela",
            "prestamos": {"Carlos":1}
        },
        {
            "titulo": "La chica de nieve",
            "autor": "Javier Castillo",
            "anio": 2020,
            "genero": "Accion",
            "prestamos": {"Ruben":2}
        },
        {
            "titulo": "El diario de Ana Frank",
            "autor": "Javier Castillo",
            "anio": 2014,
            "genero": "Accion",
            "prestamos": {"Juan":1,"Andrea":1}
        },
        {
            "titulo": "Futbolisimos",
            "autor": "Los futbolisimos",
            "anio": 2010,
            "genero": "Deporte",
            "prestamos": {"Carlos":1}
        },
    ]

    # 2. Mostrar todos los libros
    # mostrar_libros(biblioteca)
    # # 3. Buscar por autor (pedir al usuario un nombre)
    # autor_libro=input("Introduzca el autor a buscar: ")
    # buscar_por_autor(biblioteca, autor_libro)
    # # 4. Simular préstamos
    # titulo=input("Introduzca el titulo a buscar: ")
    # usuario=input("Introduzca el usuario que quiere hacer el prestamo: ")
    # prestamo(biblioteca,titulo,usuario)
    # # 5. Mostrar el libro más popular
    # libro_mas_popular(biblioteca)
    # # 6. Mostrar estadísticas de usuarios
    # estadisticas_usuarios(biblioteca)
    ficheroGuardar=input("Introduce el nombre del json: ")
    guardar_biblioteca(biblioteca, ficheroGuardar+".json")

    ficheroLeer=input("Introduce el nombre del json: ")
    print(cargar_biblioteca(ficheroLeer))

# Ejecutar programa
if __name__ == "__main__":
    main()
