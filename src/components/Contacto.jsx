import React, { useState } from 'react';

function Contacto() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault();
    setEnviado(true);
    setNombre('');
    setCorreo('');
    setMensaje('');
  };

  return (
    <main className="contacto">
      <section className="nosotros-banner">
        <span className="nosotros-etiqueta">
          ESTAMOS PARA AYUDARTE
        </span>
        <h1>Contáctanos</h1>
        <p>
          ¿Tienes alguna consulta? Escríbenos y estaremos
          encantados de ayudarte.
        </p>
        <div className="nosotros-linea"></div>
      </section>

      <section className="container py-5">
        <div className="contacto-contenedor">
          <h2>Envíanos un mensaje</h2>
          <p className="contacto-descripcion">
            Completa el formulario con tus datos y consulta.
          </p>

          {enviado && (
            <div className="alert alert-success" role="alert">
              Tu consulta ha sido registrada correctamente.
            </div>
          )}

          <form onSubmit={manejarEnvio}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input
                id="nombre"
                type="text"
                className="form-control"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="correo" className="form-label">
                Correo electrónico
              </label>
              <input
                id="correo"
                type="email"
                className="form-control"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="mensaje" className="form-label">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                className="form-control"
                rows="5"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="contacto-boton">
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contacto;