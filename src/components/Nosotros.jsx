import React from 'react';
import { Link } from 'react-router-dom';

function Nosotros() {
  return (
    <main className="nosotros">
      <section className="nosotros-banner">
        <span className="nosotros-etiqueta">
          CONOCE NUESTRA HISTORIA
        </span>
        <h1>Sobre Nosotros</h1>
        <p>
          Calidad, comodidad y resistencia en cada prenda.
        </p>
        <div className="nosotros-linea"></div>
      </section>

      <section className="container py-5">
        <div className="nosotros-presentacion">
          <span className="nosotros-subtitulo">
            QUIÉNES SOMOS
          </span>
          <h2>Vestimos tu día a día</h2>
          <p>
            En Workclothes nos dedicamos a ofrecer ropa de
            trabajo cómoda, resistente y de calidad.
            Buscamos entregar prendas funcionales que
            acompañen a nuestros clientes en sus
            actividades diarias.
          </p>
        </div>

        <div className="row g-4 mt-3">
          <div className="col-md-6">
            <div className="nosotros-tarjeta">
              <h3>Nuestra misión</h3>
              <p>
                Ofrecer prendas funcionales, duraderas
                y accesibles que respondan a las
                necesidades de nuestros clientes.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="nosotros-tarjeta">
              <h3>Nuestra visión</h3>
              <p>
                Ser una tienda reconocida por la calidad
                de sus productos, la confianza y
                satisfacción de nuestros clientes.
              </p>
            </div>
          </div>
        </div>

        <div className="nosotros-volver">
          <Link to="/" className="nosotros-boton">
            Ver nuestros productos
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Nosotros;