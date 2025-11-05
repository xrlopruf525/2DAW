#Gestor Tareas
from datetime import datetime
import json

class Tarea:
    def __init__(self, titulo, descripcion, prioridad, fecha_vencimiento):
        self.titulo = titulo
        self.descripcion = descripcion
        self.prioridad = prioridad
        self.fecha_vencimiento = fecha_vencimiento
        self.completada = False

    def marcar_completada(self):
        self.completada = True
    
    def actualizar (self, titulo, descripcion, prioridad, fecha_vencimiento ):
        if titulo:
            self.titulo = titulo
        if descripcion:
            self.descripcion = descripcion
        if prioridad:
            self.prioridad = prioridad
        if fecha_vencimiento:
            self.fecha_vencimiento = fecha_vencimiento

    def mostrar_informacion(self):
        estado = "completada" if self.completada else "Pendiente"
        print(f"Título: {self.titulo}\nDescripción: {self.descripcion}\nPrioridad: {self.prioridad}\n"
              f"Fecha de vencimiento: {self.fecha_vencimiento}\nEstado: {estado}\n")
    
class GestorTareas:
    def __init__(self):
        self.tareas =[]

    def agregar_tarea(self, tarea):
        self.tareas.append(tarea)
    
    def eliminar_tarea(self, titulo):
        self.tareas = [tarea for tarea in self.tareas if tarea.titulo != titulo]

    def actualizar_tarea(self, titulo, **kwargs):
        for tarea in self.tareas:
            if tarea.titulo == titulo:
                tarea.actualizar(**kwargs)
    
    def listar_tareas(self, completadas=False):
        tareas_a_mostrar = [tarea for tarea in self.tareas if tarea.completada == completadas]
        tareas_ordenadas = sorted(tareas_a_mostrar, key=lambda t:(t.prioridad, t.fecha_vencimiento))
        for tarea in tareas_ordenadas:
            tarea.mostrar_informacion()
            
    def guardar_tareas(self, archivo='tareas.json'):
        with open(archivo, 'w') as f:
            json.dump([t.__dict__ for t in self.tareas], f, default=str)

    def cargar_tareas(self, archivo='tareas.json'):
        try:
            with open(archivo, 'r') as f:
                tareas_cargadas = json.load(f)
                self.tareas = []
                for t in tareas_cargadas:
                    tarea = Tarea(t["titulo"], t["descripcion"], t["prioridad"], datetime.strptime(t["fecha_vencimiento"], "%d/%m/%Y").strftime("%d/%m/%Y"))
                    tarea.completada = t["completada"]
                    self.tareas.append(tarea)
        except FileNotFoundError:
            print("No se encontró el archivo de tareas. Comenzando con una lista vacía.")

def menu():
    gestor = GestorTareas()
    gestor.cargar_tareas()

    while True:
        print("\n--- Menú de Gestión de Tareas ---")
        print("1. Añadir nueva tarea")
        print("2. Marcar tarea como completada")
        print("3. Actualizar tarea")
        print("4. Ver todas las tareas pendientes")
        print("5. Ver todas las tareas completadas")
        print("6. Guardar tareas")
        print("7. Salir")

        opcion = input("Seleccione una opción: ")

        if opcion == '1':
            titulo = input("Título: ")
            descripción = input("Descripción: ")
            prioridad = input("Prioridad (del 1 al 3 siendo 1 la más alta): ")
            fecha_vencimiento = input("Fecha de vencimiento (DD/MM/AAAA): ")
            try:
                fecha_vencimiento = datetime.strptime(fecha_vencimiento, "%d/%m/%Y").strftime("%d/%m/%Y")
                nueva_tarea = Tarea(titulo,descripción,prioridad,fecha_vencimiento)
                gestor.agregar_tarea(nueva_tarea)
                nueva_tarea.mostrar_informacion()
                print("Tarea añadida")
            except ValueError:
                print("Fecha de vencimiento inválida. Vuelva a intentarlo.")
        elif opcion == '2':
            titulo = input("Título de la tarea a marcar como completada: ")
            for tarea in gestor.tareas:
                if tarea.titulo == titulo:
                    tarea.marcar_completada()
                    print("Tarea marcada como completada.")
                    break
            else:
                print("No se encontró una tarea con ese título.")
        elif opcion == '3':
            titulo = input("Título de la tarea aactualizar: ")
            for tarea in gestor.tareas:
                if tarea.titulo == titulo:
                    nuevo_titulo = input("Nuevo título (dejar vacío para no cambiar): ")
                    nueva_descripcion = input("Nueva descripción (dejar vacío para no cambiar): ")
                    nueva_prioridad = input("Nueva prioridad (Baja, Media, Alta, dejar vacío para no cambiar): ")
                    nueva_fecha_vencimiento = input("Nueva fecha de vencimiento (DD/MM/AAAA, dejar vacío para no cambiar): ")
                    try:
                        if nueva_fecha_vencimiento:
                            nueva_fecha_vencimiento = datetime.strptime(nueva_fecha_vencimiento, "%d/%m/%Y").strftime("%d/%m/%Y")
                        gestor.actualizar_tarea(titulo, titulo=nuevo_titulo or tarea.titulo,
                                                descripcion=nueva_descripcion or tarea.descripcion,
                                                prioridad=nueva_prioridad or tarea.prioridad,
                                                fecha_vencimiento=nueva_fecha_vencimiento or tarea.fecha_vencimiento)
                        print("Tarea actualizada")

                    except ValueError:
                        print("Fecha de vencimiento inválida. Vuelva a intentarlo.")
        
        elif opcion == '4':
            print("\n--- Tareas Pendientes ---")
            gestor.listar_tareas(completadas=False)
        
        elif opcion == '5':
            print("\n--- Tareas Completadas ---")
            gestor.listar_tareas(completadas=True)

        elif opcion == '6':
            gestor.guardar_tareas()
            print("Tareas guardadas exitosamente.")
        
        elif opcion == '7':
            gestor.guardar_tareas()
            print("Saliendo del programa. Tareas guardadas.")
            break
        
        else:
            print("Opción inválida. Intente nuevamente.")


if __name__ == "__main__":
    menu()