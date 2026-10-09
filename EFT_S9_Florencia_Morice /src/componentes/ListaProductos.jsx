import { useState } from 'react';
import Producto from './Producto';

function ListaProductos({ productos, onAgregarAlCarrito, carrito = [] }) {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const categorias = [...new Set(productos.map((producto) => producto.categoria).filter(Boolean))];
  const terminoBusqueda = busqueda.toLowerCase();
  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(terminoBusqueda) &&
    (!categoriaSeleccionada || producto.categoria === categoriaSeleccionada)
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

      <div className="col-12">
        <label htmlFor="filtrar-categoria" className="form-label">
          Categoría
        </label>
        <select
          id="filtrar-categoria"
          className="form-select"
          value={categoriaSeleccionada}
          onChange={(event) => setCategoriaSeleccionada(event.target.value)}
        >
          <option value="">Todas las categorías</option>
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
      </div>

      {productosFiltrados.length === 0 ? (
        <div className="col-12">
          <p className="mb-0" role="status">
            No se encontraron videojuegos para esa búsqueda y categoría.
          </p>
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
