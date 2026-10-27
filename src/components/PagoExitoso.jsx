import React from 'react';
import { Link } from 'react-router-dom';

function PagoExitoso({ carrito }) {
  const total = carrito.reduce(
    (acumulado, producto) =>
      acumulado + producto.precio * producto.cantidad,
    0
  );

  return (
    <main className="container py-5">
      <div className="pago-resultado text-center">
        <div className="pago-icono-exitoso">✓</div>

        <h1>¡Compra realizada con éxito!</h1>
        <p>
          Tu pedido ha sido confirmado correctamente.
          Gracias por comprar en Workclothes.
        </p>

        <h3 className="mt-4">Resumen de tu compra</h3>

        <div className="text-start mt-3">
          {carrito.map((producto) => (
            <div
              key={producto.id}
              className="d-flex justify-content-between border-bottom py-2"
            >
              <span>
                {producto.nombre} x{producto.cantidad}
              </span>
              <strong>
                ${(producto.precio * producto.cantidad).toLocaleString('es-CL')}
              </strong>
            </div>
          ))}
        </div>

        <h4 className="mt-4">
          Total pagado: ${total.toLocaleString('es-CL')}
        </h4>

        <Link to="/" className="btn btn-dark mt-4">
          Volver al catálogo
        </Link>
      </div>
    </main>
  );
}

export default PagoExitoso;