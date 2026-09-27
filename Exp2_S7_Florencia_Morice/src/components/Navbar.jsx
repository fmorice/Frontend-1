function Navbar({ carritoCount }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <a className="navbar-brand header-brand" href="#">GameZone</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#productos">Productos</a>
            </li>
          </ul>

          <button className="btn btn-outline-light cart-badge" type="button" aria-label="Ver carrito">
            🛒 Carrito ({carritoCount})
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
