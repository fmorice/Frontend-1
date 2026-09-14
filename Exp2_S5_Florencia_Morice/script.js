// script.js
// Archivo principal donde se realiza la manipulación del DOM
// Comentarios en español para facilitar la explicación en clase

// -----------------------------------------
// Funciones principales (organización)
// -----------------------------------------

// Carga el archivo JSON con los juegos y maneja errores
function cargarJuegos() {
  fetch('juegos.json')
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar juegos.json');
      return response.json();
    })
    .then(data => mostrarJuegos(data))
    .catch(error => {
      const lista = document.getElementById('lista-juegos');
      lista.innerHTML = `<p class="text-danger">Error al cargar los juegos: ${error.message}</p>`;
    });
}

// Muestra los juegos recibidos creando elementos dinámicamente
function mostrarJuegos(juegos) {
  const lista = document.getElementById('lista-juegos');
  lista.innerHTML = ''; // limpiar contenido previo

  juegos.forEach(juego => {
    // Crear la columna de Bootstrap
    const col = document.createElement('div');
    col.className = 'col-12 col-md-6 col-lg-4';

    // Crear la tarjeta (card) y su contenido con innerHTML
    const card = document.createElement('article');
    card.className = 'card h-100';
    card.innerHTML = `
      <img src="${juego.imagen || 'mario.jpg'}" class="card-img-top" alt="Imagen ${juego.nombre}">
      <div class="card-body">
        <h3 class="card-title">${juego.nombre}</h3>
        <p class="card-text">Plataforma: ${juego.plataforma} • Género: ${juego.genero}</p>
        <p class="card-text"><strong>Precio: $${juego.precio}</strong></p>
        <a href="#contacto" class="btn btn-primary">Comprar</a>
      </div>
    `;

    // Añadir eventos de mouseover y mouseout a la tarjeta creada
    card.addEventListener('mouseover', () => aplicarEstiloHover(card));
    card.addEventListener('mouseout', () => removerEstiloHover(card));

    col.appendChild(card);
    lista.appendChild(col);
  });
}

// Aplica estilos cuando el mouse está encima (cambio visual)
function aplicarEstiloHover(elemento) {
  elemento.style.transform = 'scale(1.03)';
  elemento.style.boxShadow = '0 10px 25px rgba(233,69,96,0.25)';
  elemento.style.borderColor = '#e94560';
}

// Revertir estilos cuando el mouse sale
function removerEstiloHover(elemento) {
  elemento.style.transform = '';
  elemento.style.boxShadow = '';
  elemento.style.borderColor = '';
}

// Configura los eventos de la página: click, mouseover en tarjetas existentes, submit
function configurarEventos() {
  // Evento CLICK para mostrar/ocultar oferta especial
  const btnOferta = document.getElementById('btnOferta');
  const detalle = document.getElementById('detalleOferta');

  if (btnOferta && detalle) {
    btnOferta.addEventListener('click', () => {
      if (detalle.style.display === 'none' || detalle.style.display === '') {
      // Crear contenido dinámico de la oferta con createElement y innerHTML
      detalle.style.display = 'block';
      detalle.innerHTML = '';

      const ofertaCard = document.createElement('div');
      ofertaCard.className = 'card text-white bg-dark mb-3';
      ofertaCard.innerHTML = `
        <div class="card-body">
          <h4 class="card-title">Oferta especial: Pack Aventura</h4>
          <p class="card-text">Incluye Super Mario Bros. + Rocket League a precio especial.</p>
          <p class="card-text"><strong>Precio oferta: $49.99</strong></p>
        </div>
      `;

      detalle.appendChild(ofertaCard);
      btnOferta.textContent = 'Ocultar oferta';
    } else {
      detalle.style.display = 'none';
      btnOferta.textContent = 'Ver oferta especial';
    }
    });
  } else {
    console.warn('Elemento btnOferta o detalleOferta no encontrado en el DOM.');
  }

  // Agregar eventos mouseover/mouseout a las tarjetas ya presentes en el HTML
  const tarjetas = document.querySelectorAll('article.card');
  tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('mouseover', () => aplicarEstiloHover(tarjeta));
    tarjeta.addEventListener('mouseout', () => removerEstiloHover(tarjeta));
  });

  // Evento SUBMIT para el formulario de suscripción
  const form = document.getElementById('formSuscripcion');
  const mensaje = document.getElementById('mensajeSuscripcion');

  if (form && mensaje) {
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // evitar recarga

      // validar campos
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();

      if (!nombre || !email) {
        mensaje.innerHTML = '<p class="text-danger">Por favor completa todos los campos.</p>';
        return;
      }

      // Simular envío exitoso
      mensaje.innerHTML = `<p class="text-success">¡Gracias ${nombre}! Te enviaremos novedades a ${email}.</p>`;
      form.reset();
    });
  } else {
    console.warn('Formulario de suscripción o contenedor de mensaje no encontrados.');
  }
}

// Ejecutar al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  configurarEventos();
  cargarJuegos();
});

// Exportar funciones (si se quisiera usar en testing u otros módulos)
// No es necesario, por eso no exportamos nada para evitar errores en el navegador.
