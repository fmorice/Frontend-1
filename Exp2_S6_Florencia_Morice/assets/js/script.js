// script.js - Semana 6 (GameZone)
// Funciones principales: fetch de productos, render, búsqueda y carrito

let productos = []; // almacenará productos cargados
const carrito = {}; // {id: {producto, qty}}

// Muestra/oculta el indicador de carga
function mostrarLoading(mostrar){
  const loading = document.getElementById('loading');
  const productosDiv = document.getElementById('productos');
  const errorDiv = document.getElementById('errorMsg');
  if(mostrar){
    loading.style.display = 'block';
    productosDiv.innerHTML = '';
    errorDiv.style.display = 'none';
  } else {
    loading.style.display = 'none';
  }
}

// Mostrar mensaje amigable de error
function mostrarError(mensaje){
  const errorDiv = document.getElementById('errorMsg');
  errorDiv.textContent = mensaje;
  errorDiv.style.display = 'block';
}

// Cargar productos desde JSON local
async function cargarProductos(){
  mostrarLoading(true);
  try{
    const res = await fetch('assets/data/productos.json');
    if(!res.ok) throw new Error('No se pudo obtener productos');
    const data = await res.json();
    productos = data;
    renderizarProductos(productos);
  }catch(err){
    mostrarError('No fue posible cargar los productos. Intenta recargar la página.');
    console.error(err);
  } finally{
    mostrarLoading(false);
    actualizarContadorCarrito();
  }
}

// Renderiza las tarjetas usando createElement (evita mezclar innerHTML)
function renderizarProductos(lista){
  const cont = document.getElementById('productos');
  cont.innerHTML = '';

  if(!lista || lista.length===0){
    cont.innerHTML = '<p class="text-muted">No se encontraron productos.</p>';
    return;
  }

  lista.forEach(prod => {
    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-lg-4';

    const card = document.createElement('article');
    card.className = 'card card-game h-100';

    const img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = prod.imagen;
    img.alt = prod.nombre;

    const body = document.createElement('div');
    body.className = 'card-body d-flex flex-column';

    const title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = prod.nombre;

    const price = document.createElement('p');
    price.className = 'price mb-3';
    price.textContent = `$${prod.precio.toFixed(2)}`;

    const btn = document.createElement('button');
    btn.className = 'btn btn-primary mt-auto';
    btn.textContent = 'Agregar al carrito';
    btn.addEventListener('click', () => agregarAlCarrito(prod.id));

    body.appendChild(title);
    body.appendChild(price);
    body.appendChild(btn);

    card.appendChild(img);
    card.appendChild(body);
    col.appendChild(card);
    cont.appendChild(col);
  });
}

// Buscar productos por nombre (case-insensitive)
function buscarProductos(termino){
  const t = termino.trim().toLowerCase();
  if(!t) return productos;
  return productos.filter(p => p.nombre.toLowerCase().includes(t));
}

// Agregar producto al carrito
function agregarAlCarrito(id){
  const prod = productos.find(p => p.id === id);
  if(!prod) return;
  if(!carrito[id]) carrito[id] = {producto: prod, qty:0};
  carrito[id].qty += 1;
  renderizarCarrito();
  actualizarContadorCarrito();
}

// Renderiza el carrito dentro del offcanvas
function renderizarCarrito(){
  const container = document.getElementById('cartItems');
  container.innerHTML = '';
  const ids = Object.keys(carrito);
  if(ids.length===0){
    container.innerHTML = '<p class="text-muted">El carrito está vacío.</p>';
    document.getElementById('btnCheckout').disabled = true;
    document.getElementById('cartTotal').textContent = '$0.00';
    return;
  }

  let total = 0;
  ids.forEach(id => {
    const entry = carrito[id];
    const row = document.createElement('div');
    row.className = 'cart-item';

    const left = document.createElement('div');
    left.textContent = entry.producto.nombre;

    const right = document.createElement('div');
    right.innerHTML = `<span class="qty">x${entry.qty}</span> <strong>$${(entry.producto.precio*entry.qty).toFixed(2)}</strong>`;

    // Botones para aumentar/disminuir cantidad
    const controls = document.createElement('div');
    const btnLess = document.createElement('button');
    btnLess.className = 'btn btn-sm btn-outline-secondary me-1';
    btnLess.textContent = '-';
    btnLess.addEventListener('click', () => changeQty(id, -1));
    const btnMore = document.createElement('button');
    btnMore.className = 'btn btn-sm btn-outline-secondary';
    btnMore.textContent = '+';
    btnMore.addEventListener('click', () => changeQty(id, +1));

    controls.appendChild(btnLess);
    controls.appendChild(btnMore);

    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.alignItems = 'center';
    wrapper.style.gap = '8px';

    wrapper.appendChild(left);
    wrapper.appendChild(right);
    wrapper.appendChild(controls);

    row.appendChild(wrapper);
    container.appendChild(row);

    total += entry.producto.precio * entry.qty;
  });

  document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
  document.getElementById('btnCheckout').disabled = false;
}

// Cambiar cantidad en el carrito (si qty llega a 0 se elimina)
function changeQty(id, delta){
  if(!carrito[id]) return;
  carrito[id].qty += delta;
  if(carrito[id].qty <= 0) delete carrito[id];
  renderizarCarrito();
  actualizarContadorCarrito();
}

// Actualiza contador visible en el botón del carrito
function actualizarContadorCarrito(){
  const countEl = document.getElementById('cartCount');
  const totalQty = Object.values(carrito).reduce((s,e)=>s+e.qty,0);
  countEl.textContent = totalQty;
}

// Validación simple y explícita de email
function validarEmail(email){
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}

// Configurar eventos: búsqueda y contacto
function configurarEventos(){
  const searchForm = document.getElementById('searchForm');
  searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const termino = document.getElementById('searchInput').value;
    const resultados = buscarProductos(termino);
    renderizarProductos(resultados);
  });

  // Categorías del dropdown
  document.querySelectorAll('#catDropdown + .dropdown-menu .dropdown-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = item.getAttribute('data-cat');
      const filtrado = productos.filter(p => p.genero === cat || p.plataforma === cat);
      renderizarProductos(filtrado);
    });
  });

  // Contact form validation explícita
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmailInput').value.trim();
    const msg = document.getElementById('contactMsg');
    if(!name || !email){
      msg.innerHTML = '<p class="text-danger">Por favor completa todos los campos.</p>';
      return;
    }
    if(!validarEmail(email)){
      msg.innerHTML = '<p class="text-danger">El correo no tiene un formato válido.</p>';
      return;
    }
    msg.innerHTML = `<p class="text-success">Gracias ${name}, recibimos tu mensaje (simulado).</p>`;
    contactForm.reset();
  });
}

// Inicialización al cargar DOM
document.addEventListener('DOMContentLoaded', ()=>{
  configurarEventos();
  cargarProductos();
});
