import { useState } from 'react';

const formularioInicial = {
  nombre: '',
  correo: '',
  mensaje: '',
};

function validarFormulario(formulario) {
  const errores = {};

  if (!formulario.nombre.trim()) {
    errores.nombre = 'Ingresa tu nombre.';
  }

  if (!formulario.correo.trim()) {
    errores.correo = 'Ingresa tu correo electrónico.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.correo.trim())) {
    errores.correo = 'Ingresa un correo electrónico válido.';
  }

  if (!formulario.mensaje.trim()) {
    errores.mensaje = 'Escribe un mensaje.';
  }

  return errores;
}

function FormularioContacto() {
  const [formulario, setFormulario] = useState(formularioInicial);
  const [intentoEnvio, setIntentoEnvio] = useState(false);
  const [confirmacion, setConfirmacion] = useState(false);
  const errores = intentoEnvio ? validarFormulario(formulario) : {};

  const actualizarCampo = (event) => {
    const { name, value } = event.target;
    setFormulario((actual) => ({ ...actual, [name]: value }));
    setConfirmacion(false);
  };

  const enviarFormulario = (event) => {
    event.preventDefault();
    setIntentoEnvio(true);

    if (Object.keys(validarFormulario(formulario)).length === 0) {
      setConfirmacion(true);
    } else {
      setConfirmacion(false);
    }
  };

  return (
    <section id="contacto" className="contacto-section mt-5" aria-labelledby="contacto-titulo">
      <h2 id="contacto-titulo" className="h3 mb-4">Contacto</h2>
      <form onSubmit={enviarFormulario} noValidate>
        <div className="mb-3">
          <label htmlFor="contacto-nombre" className="form-label">Nombre</label>
          <input
            id="contacto-nombre"
            name="nombre"
            type="text"
            className={`form-control bg-dark text-light ${errores.nombre ? 'is-invalid' : ''}`}
            value={formulario.nombre}
            onChange={actualizarCampo}
            aria-required="true"
            aria-invalid={Boolean(errores.nombre)}
            aria-describedby={errores.nombre ? 'error-nombre' : undefined}
          />
          {errores.nombre && <div id="error-nombre" className="invalid-feedback">{errores.nombre}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="contacto-correo" className="form-label">Correo electrónico</label>
          <input
            id="contacto-correo"
            name="correo"
            type="email"
            className={`form-control bg-dark text-light ${errores.correo ? 'is-invalid' : ''}`}
            value={formulario.correo}
            onChange={actualizarCampo}
            aria-required="true"
            aria-invalid={Boolean(errores.correo)}
            aria-describedby={errores.correo ? 'error-correo' : undefined}
          />
          {errores.correo && <div id="error-correo" className="invalid-feedback">{errores.correo}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="contacto-mensaje" className="form-label">Mensaje</label>
          <textarea
            id="contacto-mensaje"
            name="mensaje"
            className={`form-control bg-dark text-light ${errores.mensaje ? 'is-invalid' : ''}`}
            rows="4"
            value={formulario.mensaje}
            onChange={actualizarCampo}
            aria-required="true"
            aria-invalid={Boolean(errores.mensaje)}
            aria-describedby={errores.mensaje ? 'error-mensaje' : undefined}
          />
          {errores.mensaje && <div id="error-mensaje" className="invalid-feedback">{errores.mensaje}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Enviar mensaje</button>
        {confirmacion && (
          <p className="text-success mt-3 mb-0" role="status" aria-live="polite">
            Tus datos son válidos. El formulario está listo, pero el mensaje no se envió porque no hay un servicio conectado.
          </p>
        )}
      </form>
    </section>
  );
}

export default FormularioContacto;