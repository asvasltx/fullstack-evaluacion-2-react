import React from 'react';
import { Link } from 'react-router-dom';

function PagoRechazado() {
  return (
    <main className="container py-5">
      <div className="pago-resultado text-center">
        <div className="pago-icono-rechazado">✕</div>

        <h1>No se pudo realizar el pago</h1>
        <p>
          Tu pago no pudo ser procesado.
          Puedes volver a intentarlo.
        </p>

        <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
          <Link to="/checkout" className="btn btn-dark">
            Reintentar pago
          </Link>

          <Link to="/carrito" className="btn btn-outline-secondary">
            Volver al carrito
          </Link>
        </div>
      </div>
    </main>
  );
}

export default PagoRechazado;