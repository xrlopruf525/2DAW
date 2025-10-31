import json

with open("json2.json", "r") as fichero:
    biblioteca = json.load(fichero)

datos = {
    "titulo": "Marie Curie",
    "autor": "Antonio Lobato",
    "anio": 2002,
    "genero": "Turca",
    "prestamos": {"Joselu": 3}
}

biblioteca.append(datos)

with open("json2.json", "w") as fichero:
    json.dump(biblioteca, fichero, indent=4)

print(biblioteca)




