import { useState } from 'react';
import Navbar from './components/Navbar';
import ListaProductos from './components/ListaProductos';
import Carrito from './components/Carrito';
import { productos } from './data/productos';
import marioBanner from '../public/img/mario.jpg';

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (idProducto) => {
    setCarrito((carritoActual) => {
      const productoExistente = carritoActual.find((item) => item.producto.id === idProducto);

      if (productoExistente) {
        return carritoActual.map((item) =>
          item.producto.id === idProducto ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }

      const producto = productos.find((item) => item.id === idProducto);
      return [...carritoActual, { producto, cantidad: 1 }];
    });
  };

  const restarUnidad = (idProducto) => {
    setCarrito((carritoActual) =>
      carritoActual
        .map((item) =>
          item.producto.id === idProducto ? { ...item, cantidad: item.cantidad - 1 } : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  const eliminarProducto = (idProducto) => {
    setCarrito((carritoActual) => carritoActual.filter((item) => item.producto.id !== idProducto));
  };

  const totalProductos = carrito.reduce((total, item) => total + item.cantidad, 0);

  return (
    <>
      <Navbar carritoCount={totalProductos} />

      <main className="container py-4">
        <header className="text-center my-4">
          <h1 className="gamezone-title">GameZone</h1>
          <p className="lead text-muted">Tienda de videojuegos</p>
        </header>

        <section className="mb-5 banner-gamezone">
          <div className="banner-slide active">
            <img src={marioBanner} alt="Super Mario" />
          </div>
        </section>

        <div className="row g-4">
          <div className="col-12 col-lg-8">
            <ListaProductos productos={productos} onAgregarAlCarrito={agregarAlCarrito} />
          </div>

          <div className="col-12 col-lg-4">
            <Carrito
              carrito={carrito}
              onAgregar={agregarAlCarrito}
              onRestar={restarUnidad}
              onEliminar={eliminarProducto}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
