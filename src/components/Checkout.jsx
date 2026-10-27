
import React, { useState } from 'react';
const navigate = useNavigate();
import { Link, useNavigate } from 'react-router-dom';

function Checkout({ carrito }) {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [direccion, setDireccion] = useState('');
  const [comuna, setComuna] = useState('');
  const [entrega, setEntrega] = useState('domicilio');

  const total = carrito.reduce(
    (acumulado, producto) =>
      acumulado + producto.precio * producto.cantidad,
    0
  );

  const manejarEnvio = (e) => {
  e.preventDefault();
  navigate('/pago-exitoso');
};

  if (carrito.length === 0) {
    return (
      <main className="container py-5 text-center">
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className="btn btn-dark mt-3">
          Ver productos
        </Link>
      </main>
    );
  }

  return (
    <main className="container py-5">
      <h1 className="text-center mb-4">Finalizar compra</h1>

      <div className="row g-4">
        <div className="col-md-7">
          <div className="bg-white border rounded p-4">
            <h3>Datos de entrega</h3>

            <form onSubmit={manejarEnvio}>
              <label htmlFor="nombre" className="form-label mt-3">
                Nombre completo
              </label>
              <input
                id="nombre"
                className="form-control"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />

              <label htmlFor="correo" className="form-label mt-3">
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

              <label htmlFor="direccion" className="form-label mt-3">
                Dirección
              </label>
              <input
                id="direccion"
                className="form-control"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                required
              />

              <label htmlFor="comuna" className="form-label mt-3">
                Comuna
              </label>
              <input
                id="comuna"
                className="form-control"
                value={comuna}
                onChange={(e) => setComuna(e.target.value)}
                required
              />

              <label htmlFor="entrega" className="form-label mt-3">
                Tipo de entrega
              </label>
              <select
                id="entrega"
                className="form-select"
                value={entrega}
                onChange={(e) => setEntrega(e.target.value)}
              >
                <option value="domicilio">Despacho a domicilio</option>
                <option value="retiro">Retiro en tienda</option>
              </select>

              <button type="submit" className="btn btn-dark mt-4 w-100">
                Continuar con el pago
              </button>
            </form>
          </div>
        </div>

        <div className="col-md-5">
          <div className="bg-white border rounded p-4">
            <h3>Resumen del pedido</h3>

            {carrito.map((producto) => (
              <div
                key={producto.id}
                className="d-flex justify-content-between border-bottom py-3"
              >
                <span>
                  {producto.nombre} x{producto.cantidad}
                </span>
                <strong>
                  ${(producto.precio * producto.cantidad).toLocaleString('es-CL')}
                </strong>
              </div>
            ))}

            <h4 className="mt-4">
              Total: ${total.toLocaleString('es-CL')}
            </h4>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Checkout;