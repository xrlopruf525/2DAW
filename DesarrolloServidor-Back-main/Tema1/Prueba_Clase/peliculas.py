class BibliotecaPeliculas():

    def __init__(self) -> None:
        self.peliculas = []

    def añadirPelicula(self, peli) -> None:
        self.peliculas.append(peli)

    def mostrarPeliculas(self) -> str:
        res = ""  
        for i in self.peliculas:
            res += f' - {i}'
        return res
    
    def filtrarDirector(self, director) -> list: #Filtra por el director que se le envia
        return [pelicula for pelicula in self.peliculas if pelicula.director == director]
    
    def filtrarPelisMayorAnio(self, anio) -> list: #Filtra todas las peliculas que son mayores al año que se le manda
        return [pelicula for pelicula in self.peliculas if pelicula.anio > anio]
    
    def ordenarAnio(self)  -> list: #Ordena por año utilizando el lambda
        return sorted(self.peliculas, key=lambda peli: peli.anio)



class Pelicula():

    def __init__(self, titulo, director, anio) -> None:
        self.titulo = titulo
        self.director = director
        self.anio = anio

    def __str__(self) -> str:
        return f'{self.titulo} del director {self.director} y año {self.anio}\n'
    
    def actualizar(self, titulo, director,anio):
        if titulo:
            self.titulo=titulo
        if director:
            self.director=director
        if anio:
            self.anio=anio
    
    



biblioteca = BibliotecaPeliculas()

biblioteca.añadirPelicula(Pelicula('pelicula1', 'RL', 2025))
biblioteca.añadirPelicula(Pelicula('pelicula2', 'JI', 2023))

biblioteca.añadirPelicula(Pelicula('pelicula3', 'AC', 2021))
print(biblioteca.mostrarPeliculas())


"""peliculasJI = biblioteca.filtrarDirector('JI')
for i in peliculasJI:
    print(f' - {i}')"""

"""peliculasPosteriores2022 = biblioteca.filtrarPelisMayorAnio(2022)
for p in peliculasPosteriores2022:
    print(f' - {p}')"""

"""peliculasOrdenadas = biblioteca.ordenarAnio()
for p in peliculasOrdenadas:
    print(f' - {p}')"""


