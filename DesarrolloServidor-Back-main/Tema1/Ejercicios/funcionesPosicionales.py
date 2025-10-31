def multiplicacion(n, *args):
    res=n
    for num in args:
        res*=num
    return res


def presentar(nombre="Ana", **kwargs):
    texto = nombre
    if "apellido" in kwargs:
        texto+= " " +kwargs["apellido"]
    if "ciudad" in kwargs:
        texto+= " y soy de "+ kwargs["ciudad"]
    return "Me llamo " + texto

print(presentar(nombre="Maria", apellido="García", ciudad="Sevilla"))
