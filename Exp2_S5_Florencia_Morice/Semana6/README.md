# GameZone - Semana 6

Proyecto para la Semana 6 de Frontend I (GameZone). Esta versión mantiene la temática de videojuegos y evoluciona la entrega de la Semana 5.

Estructura del proyecto (Semana6):

Semana6/
├── index.html
├── assets/
│   ├── css/
│   │   └── estilos.css
│   ├── js/
│   │   └── script.js
│   ├── img/  (usamos las imágenes originales del repositorio root via rutas relativas)
│   └── data/
│       └── productos.json
└── README.md

Cómo probar localmente:

1. Abrir `Semana6/index.html` en un navegador (Chrome o Safari).
2. Verás el mensaje "Cargando productos..." mientras se hace `fetch` a `assets/data/productos.json`.
3. Comprobar que los productos aparecen dinámicamente.
4. Usar el buscador para filtrar por nombre. El buscador se activa con el evento `submit` del formulario.
5. Agregar productos con el botón "Agregar al carrito"; abrir el carrito (botón Carrito) para ver resumen, cantidades y total.

Pruebas en dos navegadores (evidencia):
- Abre `Semana6/index.html` en Chrome y en Safari (o Edge/otro); toma capturas de pantalla de ambas pruebas y súbelas como evidencia (no se incluye automatización de evidencia en esta entrega).

Notas y correcciones realizadas respecto a Semana 5:
- `productos.json` contiene los productos consumidos exclusivamente por `fetch`.
- `mostrarJuegos()` fue refactorizada como `renderizarProductos()` y ahora usa `createElement()` sin mezclar `innerHTML` para las tarjetas.
- Se implementó un indicador visible `Cargando productos...` mientras se realiza `fetch`.
- Se añadió manejo de error más amigable cuando falla la carga.
- Se añadió carrito dinámico con incremento/decremento de cantidades y cálculo del total.
- Validación explícita de formato de correo en el formulario de contacto con expresión regular.

Limitaciones y notas:
- Las imágenes se referencian desde la raíz del repo (por ejemplo `../mario.jpg`) para evitar duplicar archivos binarios.
- No hay backend, pagos ni login; la funcionalidad de "Pagar" es simulada y el botón está deshabilitado hasta que el carrito tenga items.

¿Quieres que ahora ejecute una verificación rápida de los archivos creados y que pruebe (con herramientas disponibles) que `productos.json` se puede leer desde `index.html`? Si sí, confirmaré y ejecutaré pasos adicionales para validar. 