import random
import json
from datetime import datetime
import os
import time

def mostrarPresentados(alumnos):
    presentados = [a for a in alumnos if a["presentado"]]
    
    if not presentados:
        print("Ningún alumno ha presentado aún.")
        return
    
    for a in presentados:
        nombre = a['nombre']
        fecha = a.get('fecha_presentacion', "Fecha no registrada")
        print(f"{nombre} - Presentado el: {fecha}")

def actualizarAlumnos(nombres_alumnos):
    alumnos = [{"nombre": nombre, "presentado": False} for nombre in nombres_alumnos]

    guardarAlumnos(alumnos)
    print("Archivo alumnos.json actualizado desde cero con todos los alumnos en 'presentado': False")

def cargarAlumnos():
    try:
        with open("alumnos.json", "r", encoding="utf-8") as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return []

def guardarAlumnos(alumnos):
    with open("alumnos.json", "w", encoding="utf-8") as f:
        json.dump(alumnos, f, ensure_ascii=False, indent=4)

def elegirAlumno(alumnos):
    disponibles = [a for a in alumnos if not a["presentado"]]
    
    if not disponibles:
        print("Todos los alumnos ya han presentado.")
        return
    
    for a in disponibles:
        print(a)
        time.sleep(0.2)
        os.system("clear")
    alumno = random.choice(disponibles)
    print(f"Alumno seleccionado para la presentación: {alumno['nombre']}")

    alumno['fecha_presentacion'] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    alumno['presentado'] = True

    guardarAlumnos(alumnos)
    print(f"{alumno['nombre']} registrado con fecha actual.")

def main():
    nombres_alumnos = [
        "Jesus Manuel Cardoso Munoz",
        "Irene Carvajal Sanchez",
        "Carmen Díaz Alfaro",
        "David Fernández Aido",
        "Ismael Gallo Munoz",
        "Ivan Gomez Jimenez",
        "Miguel Jimenez Lopez",
        "Ruben Lopez Rufino",
        "Jaime Luna Del Valle",
        "Alejandro Maya Ureba",
        "Leandro Abdiel Moreno Valcarcel",
        "Carlos Norte Diaz",
        "Daniel Ojeda Balsera",
        "Raimundo Palma Mendez",
        "Pablo Paz Fernandez",
        "Miguel Pulido Carmona",
        "Andrea Romero Haro",
        "Jaime Rubio Casado",
        "Marcos Ruiz Lerma",
        "Blas Sanchez Paniagua",
        "Alba Vazquez Guillen"
    ]

    while True:
        print()
        print("1. Cargar alumnos en el JSON (si no existe)")
        print("2. Elegir alumno al azar")
        print("3. Actualizar lista de alumnos desde 0")
        print("4. Mostar alumnos presentados")
        print("5. Salir")

        opcion = input("Seleccione una opción: ")

        if opcion == "1":
            alumnos = cargarAlumnos()
            if alumnos:
                print("El archivo ya existe con alumnos cargados.")
            else:
                actualizarAlumnos(nombres_alumnos)

        elif opcion == "2":
            alumnos = cargarAlumnos()
            if not alumnos:
                print("No hay alumnos en la lista. Primero cargue los alumnos.")
            else:
                elegirAlumno(alumnos)

        elif opcion == "3":
            actualizarAlumnos(nombres_alumnos)

        elif opcion == "4":
            alumnos = cargarAlumnos()
            if not alumnos:
                print("No hay alumnos en la lista. Primero cargue los alumnos.")
            else:
                mostrarPresentados(alumnos)


        elif opcion == "5":
            print("El programa ha finalizado")
            break

        else:
            print("Opción inválida. Intente nuevamente.")

if __name__ == "__main__":
    main()
