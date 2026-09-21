# GameZone - Semana 6

Proyecto correspondiente a la Semana 6 de Frontend I.
Esta versión mantiene la temática de videojuegos de GameZone y amplía la funcionalidad desarrollada en las semanas anteriores mediante JavaScript, manipulación del DOM, eventos y Fetch API.

## Estructura del proyecto

```text
Exp2_S6_Florencia_Morice/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── estilos.css
    ├── js/
    │   └── script.js
    ├── data/
    │   └── productos.json
    └── img/
        ├── mario.jpg
        ├── minecraft.jpg
        └── Rocket_League.jpg
```

## Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript
* Bootstrap 5
* Fetch API
* Manipulación dinámica del DOM
* Google Fonts - Orbitron

## Funcionalidades implementadas

### Carga dinámica de productos

Los productos se almacenan en el archivo `assets/data/productos.json` y se cargan dinámicamente mediante la API `fetch()` de JavaScript.

Mientras se realiza la carga se muestra temporalmente el mensaje:

**"Cargando productos..."**

Si ocurre un problema durante la carga, se muestra un mensaje amigable al usuario:

**"No fue posible cargar los productos. Intenta recargar la página."**

### Búsqueda de productos

La página cuenta con un formulario de búsqueda que utiliza el evento `submit` de JavaScript para filtrar los productos por nombre.

### Carrito de compras

Los productos pueden agregarse al carrito mediante el evento `click`.

El carrito permite:

* Agregar productos.
* Aumentar y disminuir cantidades.
* Eliminar productos.
* Mostrar la cantidad de productos.
* Calcular dinámicamente el total de la compra.

### Manipulación del DOM

Los productos y los elementos del carrito se generan dinámicamente mediante JavaScript utilizando `createElement()` y otras funciones de manipulación del DOM.

La función principal para mostrar los productos es `renderizarProductos()`.

### Validación del formulario

El formulario de contacto valida mediante JavaScript que los campos requeridos estén completos y que el correo electrónico tenga un formato válido.

La validación del correo se realiza mediante una expresión regular.

### Diseño responsive

La interfaz utiliza Bootstrap 5 para facilitar la adaptación de la página a distintos tamaños de pantalla, incluyendo dispositivos móviles.

La página incluye:

* Navbar responsive.
* Menú de categorías.
* Buscador.
* Carrusel.
* Tarjetas de productos.
* Carrito mediante Offcanvas.
* Formulario de contacto.
* Footer.

## Cómo probar el proyecto localmente

Para probar correctamente la funcionalidad de `fetch()`, se recomienda ejecutar el proyecto mediante un servidor local.

Desde la carpeta del proyecto:

```bash
python3 -m http.server 8000
```

Luego abrir en el navegador:

```text
http://localhost:8000/
```

### Pruebas principales

1. Verificar que aparezca el mensaje **"Cargando productos..."** mientras se cargan los datos.
2. Comprobar que los productos se muestran correctamente.
3. Utilizar el buscador para filtrar productos.
4. Agregar un producto al carrito.
5. Aumentar o disminuir la cantidad.
6. Comprobar el cálculo dinámico del total.
7. Probar la validación del formulario de contacto.
8. Verificar que las imágenes de los productos se carguen correctamente.
9. Comprobar la adaptación de la página en una vista móvil.

## Compatibilidad entre navegadores

Se realizaron pruebas de funcionamiento en distintos navegadores para verificar la compatibilidad de las funcionalidades JavaScript.

Las evidencias consideran pruebas realizadas en:

* Google Chrome.
* Safari.

Las pruebas permiten verificar el funcionamiento de la carga de productos, búsqueda y carrito en ambos navegadores.

## Evidencias de funcionamiento

Las evidencias de la entrega consideran:

* Estructura de archivos del proyecto.
* Visualización de los productos cargados mediante Fetch API.
* Archivo `productos.json` con los datos utilizados por la aplicación.
* Funcionamiento del buscador.
* Funcionamiento dinámico del carrito.
* Validación del correo electrónico.
* Manejo de errores de Fetch API.
* Visualización del mensaje **"Cargando productos..."**.
* Compatibilidad en Chrome y Safari.
* Visualización responsive en dispositivos móviles.

## Mejoras realizadas respecto a la entrega anterior

* Se actualizó la estructura del proyecto para mantener una organización independiente para la Semana 6.
* Se implementó la carga dinámica de productos mediante Fetch API.
* Se agregó el mensaje temporal **"Cargando productos..."** durante la carga.
* Se incorporó un mensaje amigable para errores de carga.
* Se mejoró la manipulación del DOM utilizando `createElement()` para generar los elementos de los productos.
* Se implementó un carrito dinámico con cantidades y cálculo del total.
* Se agregó búsqueda de productos mediante el evento `submit`.
* Se incorporó validación explícita del formato del correo electrónico mediante JavaScript.
* Se mantuvo el diseño responsive mediante Bootstrap 5.
* Se realizaron pruebas de compatibilidad en Chrome y Safari.

## Consideraciones

* Los productos utilizados en la página son datos de demostración almacenados en `assets/data/productos.json`.
* Las imágenes de los productos se encuentran dentro de `assets/img/`.
* El proyecto funciona de manera local y no requiere un backend.
* No se implementan pagos reales, autenticación ni conexión con una base de datos.
* La funcionalidad de compra es simulada con fines académicos.
