import { useState } from 'react';
import Producto from './Producto';

function ListaProductos({ productos, onAgregarAlCarrito, carrito = [] }) {
  const [busqueda, setBusqueda] = useState('');
  const terminoBusqueda = busqueda.toLowerCase();
  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(terminoBusqueda)
  );

  return (
    <section id="productos" className="row g-4 product-grid">
      <div className="col-12">
        <label htmlFor="buscar-producto" className="form-label">
          Buscar juego
        </label>
        <input
          id="buscar-producto"
          className="form-control"
          type="search"
          placeholder="Buscar por nombre..."
          value={busqueda}
          onChange={(event) => setBusqueda(event.target.value)}
        />
      </div>

      {productosFiltrados.length === 0 ? (
        <div className="col-12">
          <p className="mb-0">No se encontraron productos.</p>
        </div>
      ) : (
        productosFiltrados.map((producto) => {
          const enCarrito = carrito.some(
            (item) => item.producto.id === producto.id
          );

          return (
            <div key={producto.id} className="col-12 col-sm-6 col-lg-4">
              <Producto
                producto={producto}
                onAgregarAlCarrito={onAgregarAlCarrito}
                enCarrito={enCarrito}
              />
            </div>
          );
        })
      )}
    </section>
  );
}

export default ListaProductos;
