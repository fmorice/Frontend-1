# GameZone - Semana 7

Proyecto React para una tienda de videojuegos inspirada en la Semana 6.

## Objetivo
Construir una aplicación sencilla de eCommerce para GameZone con productos, carrito y cálculo del total usando el precio de oferta.

## Tecnologías
- React
- Vite
- JavaScript
- JSX
- Bootstrap 5.3.3
- CSS personalizado

## Funcionalidades
- Listado de productos.
- Precio normal tachado y precio oferta destacado.
- Carrito con React y useState.
- Agregar, eliminar y ajustar cantidades.
- Total calculado con precio de oferta.
- Diseño responsive.

## Estructura
```text
Exp2_S7_Florencia_Morice/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── public/
│   └── img/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── estilos.css
│   ├── componentes/
│   │   ├── Navbar.jsx
│   │   ├── ListaProductos.jsx
│   │   ├── Producto.jsx
│   │   └── Carrito.jsx
│   └── datos/
│       └── productos.js
└── .gitignore
```

## Ejecutar localmente
```bash
npm install
npm run dev
```

## Compilar
```bash
npm run build
```

## GitHub Pages
La configuración de Vite usa la base:
```js
base: '/Frontend-1/Exp2_S7_Florencia_Morice/'
```
para que la app funcione correctamente en la ruta final de GitHub Pages.
