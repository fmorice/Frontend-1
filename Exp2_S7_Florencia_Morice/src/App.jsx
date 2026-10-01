import { useEffect, useState } from 'react';
import Navbar from './componentes/Navbar';
import ListaProductos from './componentes/ListaProductos';
import Carrito from './componentes/Carrito';

function App() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    // Carga los productos desde el archivo JSON público al iniciar la aplicación.
    const cargarProductos = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}productos.json`);

        if (!response.ok) {
          throw new Error('No fue posible cargar los productos.');
        }

        const data = await response.json();
        setProductos(data);
      } catch {
        setError('No fue posible cargar los productos.');
      } finally {
        setCargando(false);
      }
    };

    cargarProductos();
  }, []);

  const agregarAlCarrito = (idProducto) => {
    setCarrito((carritoActual) => {
      const productoExistente = carritoActual.find(
        (item) => item.producto.id === idProducto
      );

      if (productoExistente) {
        return carritoActual.map((item) =>
          item.producto.id === idProducto
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
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
          item.producto.id === idProducto
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  const eliminarProducto = (idProducto) => {
    setCarrito((carritoActual) =>
      carritoActual.filter((item) => item.producto.id !== idProducto)
    );
  };

  const totalProductos = carrito.reduce(
    (total, item) => total + item.cantidad,
    0
  );

  return (
    <>
      <Navbar carritoCount={totalProductos} />

      <main className="container py-4">
        <header className="text-center my-4">
          <h1 className="gamezone-title">GameZone</h1>
          <p className="lead subtitulo-gamezone">
            Tienda de videojuegos
          </p>
        </header>

        {/* Carrusel de imágenes */}
        <section className="mb-5 banner-gamezone">
          <div
            id="gameZoneCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#gameZoneCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>

              <button
                type="button"
                data-bs-target="#gameZoneCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>

              <button
                type="button"
                data-bs-target="#gameZoneCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active banner-slide">
                <img
                  src="/Frontend-1/Exp2_S7_Florencia_Morice/img/mario.jpg"
                  alt="Super Mario Bros."
                />
              </div>

              <div className="carousel-item banner-slide">
                <img
                  src="/Frontend-1/Exp2_S7_Florencia_Morice/img/minecraft.jpg"
                  alt="Minecraft"
                />
              </div>

              <div className="carousel-item banner-slide">
                <img
                  src="/Frontend-1/Exp2_S7_Florencia_Morice/img/Rocket_League.jpg"
                  alt="Rocket League"
                />
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#gameZoneCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Anterior</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#gameZoneCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>
        </section>

        {cargando ? (
          <p className="text-center">Cargando productos...</p>
        ) : error ? (
          <p className="text-center" role="alert">{error}</p>
        ) : (
          <div className="row g-4">
            <div className="col-12 col-lg-8">
              <ListaProductos
                productos={productos}
                carrito={carrito}
                onAgregarAlCarrito={agregarAlCarrito}
              />
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
        )}
      </main>
    </>
  );
}

export default App;
