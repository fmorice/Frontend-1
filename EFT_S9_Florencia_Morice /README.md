# GameZone — Evaluación Final Transversal Frontend I

## Descripción del proyecto

GameZone es una aplicación web de una tienda de videojuegos online, desarrollada como proyecto final de la asignatura Frontend I.

El sitio permite visualizar un catálogo de videojuegos, consultar sus precios, buscar productos y gestionar un carrito de compras. El proyecto utiliza React para organizar la aplicación en componentes reutilizables, JavaScript para la lógica y Bootstrap 5 para construir una interfaz responsiva.

## Objetivo

Desarrollar una tienda de videojuegos funcional que integre HTML5, CSS3, JavaScript, Bootstrap 5 y React, aplicando buenas prácticas de desarrollo web, organización del código, interactividad y diseño adaptable a distintos dispositivos.

## Tecnologías utilizadas

* **HTML5:** estructura semántica del sitio.
* **CSS3:** estilos personalizados y presentación visual.
* **JavaScript:** lógica de la aplicación y manejo de datos.
* **React:** desarrollo mediante componentes reutilizables.
* **Vite:** entorno de desarrollo y compilación.
* **Bootstrap 5.3.3:** maquetación responsiva y componentes visuales.
* **Git y GitHub:** control de versiones y almacenamiento del proyecto.
* **GitHub Pages:** publicación de la aplicación web.

## Funcionalidades

### Catálogo de videojuegos

* Visualización de los videojuegos disponibles en la tienda.
* Tarjetas de productos con imágenes, nombres, precios y demás información disponible.
* Carga dinámica de productos desde el archivo `productos.json`.
* Búsqueda de videojuegos.
* Mensaje informativo cuando no se encuentran productos que coincidan con la búsqueda.
* Carrusel de imágenes de videojuegos.

### Carrito de compras

* Agregar videojuegos al carrito.
* Modificar las cantidades de los productos.
* Eliminar productos del carrito.
* Calcular automáticamente el total de la compra.
* Mostrar el estado del botón cuando un producto se encuentra en el carrito.
* Actualizar la interfaz según los cambios realizados por el usuario.

### React y manejo del estado

* Organización del código en componentes reutilizables.
* Uso de `useState` para gestionar los productos, la búsqueda y el carrito.
* Uso de `useEffect` para cargar los productos mediante `fetch`.
* Renderizado dinámico de productos.
* Renderizado condicional según el estado de la aplicación.

### Diseño responsivo

* Uso de Bootstrap 5 para adaptar la interfaz a diferentes tamaños de pantalla.
* Estilos personalizados para mantener la identidad visual de GameZone.
* Distribución de los productos mediante una maquetación adaptable.

> **Nota:** las funcionalidades de filtrado por categoría y formulario de contacto con validación deben verificarse en la versión final de la EFT e incorporarse si todavía no están implementadas.

## Estructura del proyecto

La estructura principal del proyecto es la siguiente:

```text
Exp3_S8_Florencia_Morice/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── public/
│   ├── productos.json
│   └── img/
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── estilos.css
    └── componentes/
        ├── Navbar.jsx
        ├── ListaProductos.jsx
        ├── Producto.jsx
        └── Carrito.jsx
```

### Descripción de los archivos principales

* **`index.html`:** contiene la estructura HTML inicial de la aplicación.
* **`src/main.jsx`:** inicia la aplicación React y la conecta con el documento HTML.
* **`src/App.jsx`:** organiza los componentes principales y la lógica general de la tienda.
* **`src/estilos.css`:** contiene los estilos personalizados.
* **`src/componentes/Navbar.jsx`:** muestra la barra de navegación.
* **`src/componentes/ListaProductos.jsx`:** presenta el catálogo de videojuegos.
* **`src/componentes/Producto.jsx`:** representa la tarjeta individual de un videojuego.
* **`src/componentes/Carrito.jsx`:** muestra los productos agregados y el resumen de la compra.
* **`public/productos.json`:** almacena los datos de los videojuegos utilizados por la aplicación.
* **`vite.config.js`:** configura Vite para el desarrollo y la publicación del proyecto.

## Instalación y ejecución local

### Requisitos previos

Para ejecutar el proyecto localmente se necesita:

* Node.js y npm instalados.
* Git, si se desea clonar el repositorio.

### 1. Clonar el repositorio

```bash
git clone https://github.com/fmorice/Frontend-1.git
```

### 2. Ingresar a la carpeta del proyecto

```bash
cd Frontend-1/Exp3_S8_Florencia_Morice
```

### 3. Instalar las dependencias

```bash
npm install
```

### 4. Ejecutar la aplicación

```bash
npm run dev
```

Vite mostrará en la terminal la dirección local donde se puede abrir la aplicación en el navegador.

### 5. Generar la versión de producción

```bash
npm run build
```

Este comando genera la versión optimizada del proyecto en la carpeta `dist`.

## Publicación en GitHub Pages

El proyecto está configurado para publicarse en GitHub Pages.

La configuración de Vite utiliza la siguiente ruta base:

```js
base: '/Frontend-1/Exp3_S8_Florencia_Morice/'
```

Esta ruta permite que los recursos de la aplicación se carguen correctamente desde el subdirectorio donde se encuentra publicada.

**Repositorio GitHub:**

https://github.com/fmorice/Frontend-1

**Aplicación publicada:**

https://fmorice.github.io/Frontend-1/Exp3_S8_Florencia_Morice/

## Pruebas y verificación

Antes de la entrega final se deben comprobar los siguientes aspectos:

* La aplicación carga correctamente.
* Los productos y sus imágenes se muestran sin errores.
* La búsqueda y los filtros funcionan según lo esperado.
* Se pueden agregar, modificar y eliminar productos del carrito.
* Los totales se calculan correctamente.
* El formulario de contacto valida los campos y muestra mensajes claros.
* La interfaz se adapta a distintos tamaños de pantalla.
* La aplicación funciona correctamente en los navegadores utilizados para las pruebas.
* La consola del navegador no presenta errores relevantes.

## Control de versiones

El proyecto utiliza Git y GitHub para registrar los avances realizados durante el desarrollo.

Se recomienda utilizar mensajes de commit claros y descriptivos, por ejemplo:

* `Actualiza documentación del proyecto`
* `Implementa filtro por categoría`
* `Agrega formulario de contacto con validación`
* `Mejora diseño responsivo de las tarjetas`
* `Corrige errores en el catálogo de videojuegos`

## Entrega de la Evaluación Final Transversal

La entrega contempla los siguientes elementos:

1. Enlace al repositorio de GitHub.
2. Archivo de video en formato MP4 con la presentación individual del proyecto.
3. Archivo ZIP con los archivos y recursos necesarios para ejecutar la aplicación.
4. Este archivo README.md con la descripción, estructura e instrucciones de instalación y uso.

El video debe mostrar el funcionamiento del sitio y explicar las principales decisiones de diseño, la organización de los componentes, el uso de JavaScript y React, y las funcionalidades implementadas.

## Autora

**Florencia Morice**

Proyecto desarrollado para la asignatura Frontend I.
