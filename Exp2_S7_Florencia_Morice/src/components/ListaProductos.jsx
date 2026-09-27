import Producto from './Producto';

function ListaProductos({ productos, onAgregarAlCarrito }) {
  return (
    <section id="productos" className="row g-4 product-grid">
      {productos.map((producto) => (
        <div key={producto.id} className="col-12 col-sm-6 col-lg-4">
          <Producto producto={producto} onAgregarAlCarrito={onAgregarAlCarrito} />
        </div>
      ))}
    </section>
  );
}

export default ListaProductos;
