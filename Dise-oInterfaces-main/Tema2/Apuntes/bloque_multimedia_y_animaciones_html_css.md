# 🟢 BLOQUE 1: MULTIMEDIA (Video, Audio e Imágenes)

## 1. Insertar Video (HTML5)

> **Importante:** Para que funcione el `autoplay` en Chrome/Edge, el video casi siempre debe estar en silencio (`muted`).

```html
<video width="320" height="240" controls autoplay muted poster="portada.jpg">
  <source src="video.mp4" type="video/mp4">
  <source src="video.ogg" type="video/ogg">
  Tu navegador no soporta el video.
</video>
```

**Atributos importantes:**
- `controls`: Muestra los botones de play, pausa y volumen.
- `autoplay`: Arranca automáticamente al cargar.
- `muted`: Quita el sonido (obligatorio para autoplay).
- `poster`: Imagen que se muestra antes de reproducir.

---

## 2. Insertar Audio (HTML5)

**Formatos compatibles:** MP3, WAV, OGG.

```html
<audio controls autoplay>
  <source src="audio.ogg" type="audio/ogg">
  <source src="audio.mp3" type="audio/mpeg">
  Tu navegador no soporta el audio.
</audio>
```

---

## 3. Insertar YouTube / Google Maps

Se utiliza un `iframe`. Copia la URL del recurso en el atributo `src`.

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/TU_CODIGO_AQUI"
  title="YouTube video player"
  frameborder="0"
  allowfullscreen>
</iframe>
```

---

## 4. Rendimiento: Lazy Loading

Hace que la imagen no cargue hasta que el usuario haga scroll hasta ella.

```html
<img src="foto.jpg" alt="Descripción" loading="lazy" width="400" height="400">
```

---

# 🔵 BLOQUE 2: TRANSICIONES Y ANIMACIONES (CSS)

## 1. Transformaciones (`transform`)

Cambian la forma o posición. **No es una animación**, es un estado.

```css
.elemento {
  /* Mover: Eje X (horizontal), Eje Y (vertical) */
  transform: translate(50px, 100px);

  /* Rotar: En grados */
  transform: rotate(45deg);

  /* Escalar */
  transform: scale(1.5);        /* Ancho y alto igual */
  transform: scale(1.5, 2);     /* Ancho 1.5, Alto 2 */

  /* Inclinar */
  transform: skew(20deg, 10deg);

  /* Combinado (el orden importa) */
  transform: translate(50px, 0) rotate(45deg);
}
```

---

## 2. Transiciones (`transition`)

Suavizan el cambio de una propiedad (por ejemplo, con `:hover`).

**Sintaxis:**
```
transition: [propiedad] [duración] [curva] [retraso];
```

```css
.boton {
  background-color: red;
  width: 100px;

  /* Transición simple */
  transition: width 1s ease-in-out;

  /* Transición múltiple */
  transition: width 2s, background-color 0.5s;
}

.boton:hover {
  background-color: blue;
  width: 300px;
}
```

**Curvas comunes:**
- `linear`: constante
- `ease`: normal
- `ease-in`: lento al inicio
- `ease-out`: lento al final

### Truco: animar aparición/desaparición

Si necesitas animar algo que usa `display: none`:

```css
.menu {
  transition: opacity 0.5s, display 0.5s;
  transition-behavior: allow-discrete;
}
```

---

## 3. Animaciones (`@keyframes` + `animation`)

Se ejecutan solas, sin interacción del usuario.

### Paso A: Definir los Keyframes

```css
@keyframes miMovimiento {
  0% {
    background-color: red;
    left: 0px;
  }

  50% {
    background-color: yellow;
    left: 200px;
  }

  100% {
    background-color: blue;
    left: 0px;
  }
}
```

### Paso B: Ejecutar la animación

**Sintaxis general:**
```
animation: [nombre] [duración] [curva] [retraso] [repeticiones] [dirección] [relleno];
```

```css
div {
  animation: miMovimiento 4s ease-in-out 0s infinite alternate forwards;
}
```

### Desglose de propiedades

- `animation-name`: Nombre del keyframe (ej: `miMovimiento`).
- `animation-duration`: Duración de una vuelta (ej: `4s`).
- `animation-iteration-count`: Número de repeticiones (`1`, `3`, `infinite`).
- `animation-direction`:
  - `normal`: 0% → 100% y reinicia
  - `alternate`: va y vuelve
- `animation-fill-mode`:
  - `forwards`: se queda en el estado final
  - `none`: vuelve al estado inicial

