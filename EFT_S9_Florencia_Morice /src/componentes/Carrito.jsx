function Carrito({ carrito, onAgregar, onRestar, onEliminar }) {
  const totalCarrito = carrito.reduce((total, item) => total + item.cantidad * item.producto.precioOferta, 0);

  if (carrito.length === 0) {
    return (
      <aside className="carrito-panel">
        <h3>Carrito</h3>
        <p className="text-muted mb-0">No hay productos en el carrito.</p>
      </aside>
    );
  }

  return (
    <aside className="carrito-panel">
      <h3>Carrito</h3>

      {carrito.map((item) => (
        <div key={item.producto.id} className="carrito-item">
          <div className="carrito-info">
            <span>{item.producto.nombre}</span>
            <strong>${(item.producto.precioOferta * item.cantidad).toLocaleString('es-CL')}</strong>
          </div>

          <div className="carrito-controles">
            <button className="btn btn-sm btn-outline-secondary" onClick={() => onRestar(item.producto.id)}>
              -
            </button>
            <span className="cantidad">{item.cantidad}</span>
            <button className="btn btn-sm btn-outline-secondary" onClick={() => onAgregar(item.producto.id)}>
              +
            </button>
            <button className="btn btn-sm btn-danger ms-2" onClick={() => onEliminar(item.producto.id)}>
              Eliminar
            </button>
          </div>
        </div>
      ))}

      <hr />
      <div className="d-flex justify-content-between align-items-center total-carrito">
        <span>Total:</span>
        <strong>${totalCarrito.toLocaleString('es-CL')}</strong>
      </div>
    </aside>
  );
}

export default Carrito;
