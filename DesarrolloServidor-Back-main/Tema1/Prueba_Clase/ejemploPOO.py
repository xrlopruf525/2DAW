class Persona():
    def __init__(self, nombre, apellido, edad) -> None:
        self.nombre = nombre
        self.apellido = apellido
        self.edad = edad

    def __str__(self):
        return f'{self.nombre}, {self.apellido}, {self.edad}'


class Estudiante(Persona):
    def __init__(self, nombre, apellido, edad):
        super().__init__(nombre, apellido, edad)
        self.asignaturas = []

    def añadirAsignatura(self, asignatura):
        self.asignaturas.append(asignatura)

    def mostrarAsignatura(self):
        res = "Asignaturas:\n"  
        for i in self.asignaturas:
            res += f' - {i}'
        print(res)
    
    def mostrar_profesores(self):
        res = []
        for a in self.asignaturas:
            if a.profesor and a.profesor.nombre not in res:
                res.append(a.profesor.nombre)

        return res
class Profesor(Persona):
    def __init__(self, nombre, apellido, edad):
        super().__init__(nombre, apellido, edad)
    
    def __str__(self):
        return f'{self.nombre}, {self.apellido}'


class Asignatura:
    def __init__(self, nombre, horas, profesor):
        self.nombre = nombre
        self.horas = horas
        self.profesor = profesor
    
    def __str__(self):
        return f'{self.nombre} ({self.horas}h) impartida por: {self.profesor.nombre}\n'


class Grupo():
    def __init__(self, nombre):
        self.nombre = nombre
        self.alumnos = []

    def anadirAlumno(self, alumno):
        self.alumnos.append(alumno)

    def listado_profesores_grupo(self):
        profesores = []
        for alumno in self.alumnos:
            profesores.extend(alumno.mostrar_profesores())
    
        print(f"Profesores del grupo {self.nombre}:")
        profesores_final = list(set(profesores))

        for p in profesores_final:
            print (f' - {p}')
        return profesores_final

daw2 = Grupo('2DAW')
ruben = Estudiante('Ruben', 'Rufino', 19)
jaime = Estudiante('Jaime', 'Luna', 18)
daw2.anadirAlumno(ruben)
daw2.anadirAlumno(jaime)

david = Profesor('David', 'De Vega', 50)
ji = Profesor('JI', 'Huertas', 40)

cliente = Asignatura('Cliente', 6 , david)
servidor = Asignatura('Servidor', 8 , ji)
ia = Asignatura('IA', 3, david)

ruben.añadirAsignatura(cliente)
ruben.añadirAsignatura(servidor)
ruben.añadirAsignatura(ia)

jaime.añadirAsignatura(cliente)
jaime.añadirAsignatura(ia)

#Resultados

ruben.mostrar_profesores()
ruben.mostrarAsignatura()

jaime.mostrar_profesores()

daw2.listado_profesores_grupo()
