function Producto({ producto, onAgregarAlCarrito }) {
  return (
    <article className="card card-game h-100">
      <img className="card-img-top" src={producto.imagen} alt={producto.nombre} />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{producto.nombre}</h5>

        <div className="price-group mb-3">
          <span className="precio-normal">${producto.precioNormal.toLocaleString('es-CL')}</span>
          <span className="precio-oferta">${producto.precioOferta.toLocaleString('es-CL')}</span>
        </div>

        <p className="descripcion">{producto.descripcion}</p>

        <button className="btn btn-primary mt-auto" onClick={() => onAgregarAlCarrito(producto.id)}>
          Agregar al carrito
        </button>
      </div>
    </article>
  );
}

export default Producto;
