# GameZone - Semana 7

Proyecto independiente de React para la tienda GameZone.

## Objetivo
Crear una aplicación sencilla de eCommerce con productos de videojuegos, carrito y cálculo del total usando precios con oferta.

## Tecnologías utilizadas
- React
- Vite
- JavaScript
- JSX
- Bootstrap 5.3.3
- CSS personalizado

## Funcionalidades principales
- Listado de productos con nombre, precio normal, precio oferta, descripción e imagen.
- Botón Agregar al carrito.
- Carrito con React y useState.
- Aumento y disminución de cantidades.
- Eliminación de productos.
- Contador total de artículos.
- Total calculado con precio de oferta.
- Mensaje cuando el carrito está vacío.

## Estructura general
```text
Exp2_S7_Florencia_Morice/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── public/
│   └── img/
│       ├── mario.jpg
│       ├── minecraft.jpg
│       └── Rocket_League.jpg
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
└── .gitignore
```

## Cómo probar localmente
```bash
npm install
npm run dev
```

## Compilar para producción
```bash
npm run build
```

## GitHub Pages
El proyecto está preparado con Vite usando una ruta relativa (`base: './'`) para facilitar su despliegue posterior en GitHub Pages.
