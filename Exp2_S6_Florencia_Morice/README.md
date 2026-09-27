# GameZone React

Proyecto de Frontend I desarrollado en React como versión moderna de la tienda GameZone. La idea es mantener el estilo visual de la entrega anterior, reutilizando las imágenes del proyecto y adaptando la lógica del carrito a componentes reutilizables.

## Objetivo

Crear una aplicación sencilla de eCommerce para videojuegos, con un listado de productos y carrito de compras. El proyecto está pensado para ser fácil de entender para un estudiante principiante y para dejar la base lista para publicación en GitHub Pages.

## Tecnologías utilizadas

- React
- JavaScript
- JSX
- Vite
- Bootstrap 5.3.3
- CSS personalizado

## Funcionalidades principales

- Listado de productos con nombre, precio normal, precio de oferta, descripción e imagen.
- Botón "Agregar al carrito" por cada producto.
- Carrito con estado React.
- Aumento y disminución de cantidades.
- Eliminación de productos del carrito.
- Cálculo del total usando el precio de oferta.
- Indicador del número total de productos en la barra de navegación.
- Diseño responsive con enfoque gamer y colores oscuros.

## Uso de React

La aplicación se organiza en componentes simples:

- App
- Navbar
- ListaProductos
- Producto
- Carrito

Los datos de los productos están separados en un archivo dedicado:

- src/data/productos.js

Esto facilita mantener el contenido independiente de la lógica visual.

## Funcionamiento del carrito

El carrito se maneja con useState. Cuando el usuario agrega un producto:

- Si ya existe en el carrito, aumenta la cantidad.
- Si no existe, lo agrega con cantidad 1.
- El total se calcula siempre con el precio de oferta.
- Si el carrito queda vacío, se muestra un mensaje de advertencia.

## Estructura general del proyecto

```text
Exp2_S6_Florencia_Morice/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── estilos.css
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ListaProductos.jsx
│   │   ├── Producto.jsx
│   │   └── Carrito.jsx
│   └── data/
│       └── productos.js
├── assets/
│   └── img/
│       ├── mario.jpg
│       ├── minecraft.jpg
│       └── Rocket_League.jpg
└── node_modules/
```

## Cómo probar el proyecto localmente

1. Abrir la terminal en la carpeta del proyecto.
2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar la aplicación en modo desarrollo:

```bash
npm run dev
```

4. Abrir la URL que indique Vite en el navegador.

## Preparación para GitHub Pages

El proyecto está configurado con Vite usando base relativa para facilitar la publicación posterior en GitHub Pages:

```js
base: './'
```

Cuando corresponda, se puede compilar con:

```bash
npm run build
```

El contenido generado en la carpeta `dist` se puede publicar en una rama `gh-pages` para desplegarlo.

## Nota

No se agregan funcionalidades extras como login, pagos, backend ni base de datos. La intención es mantener el proyecto simple y fiel a los requisitos de la semana 7.
