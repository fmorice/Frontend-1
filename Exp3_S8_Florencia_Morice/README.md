GameZone — Semana 8

Proyecto React para una tienda de videojuegos, desarrollado como continuación del proyecto de eCommerce de las semanas anteriores.

Objetivo

Construir una aplicación sencilla de eCommerce para GameZone utilizando React, incorporando gestión de estados, carga dinámica de productos, búsqueda, carrito de compras y renderizado condicional.

Tecnologías
React
Vite
JavaScript
JSX
Bootstrap 5.3.3
CSS personalizado
Funcionalidades
Catálogo de productos cargado dinámicamente desde productos.json.
Uso de useEffect para cargar los productos mediante fetch.
Uso de useState para gestionar productos, carrito y búsqueda.
Búsqueda y filtrado de productos.
Agregar productos al carrito.
Modificar cantidades de productos.
Eliminar productos del carrito.
Cálculo automático del total.
Cambio de estado del botón a “En el carrito ✓”.
Renderizado condicional según el estado de la aplicación.
Mensaje “No se encontraron productos.” cuando una búsqueda no tiene resultados.
Diseño responsive.
Carrusel de imágenes de videojuegos.
Estructura
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
Ejecución local

Instalar las dependencias:

npm install

Ejecutar el proyecto:

npm run dev
Compilación

Para generar la versión de producción:

npm run build
GitHub Pages

El proyecto se encuentra publicado en GitHub Pages mediante la rama gh-pages.

La configuración de Vite utiliza la siguiente ruta base:

base: '/Frontend-1/Exp3_S8_Florencia_Morice/'

Esto permite que la aplicación funcione correctamente en la ruta de GitHub Pages.

Despliegue

Repositorio:
https://github.com/fmorice/Frontend-1

Aplicación publicada:
https://fmorice.github.io/Frontend-1/Exp3_S8_Florencia_Morice/