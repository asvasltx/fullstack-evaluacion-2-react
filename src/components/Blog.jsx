import React from 'react';

const articulos = [
  {
    id: 1,
    titulo: 'Cómo elegir tu ropa de trabajo',
    descripcion: 'Consejos para encontrar prendas cómodas, resistentes y adecuadas para tu jornada.',
    categoria: 'CONSEJOS'
  },
  {
    id: 2,
    titulo: 'Cuidados para tus prendas',
    descripcion: 'Aprende a conservar tu ropa de trabajo en buen estado por más tiempo.',
    categoria: 'CUIDADO DE PRENDAS'
  },
  {
    id: 3,
    titulo: 'Comodidad y seguridad laboral',
    descripcion: 'Conoce la importancia de utilizar vestimenta apropiada para tus actividades.',
    categoria: 'ROPA DE TRABAJO'
  }
];

function Blog() {
  return (
    <main className="blog">
      <section className="nosotros-banner">
        <span className="nosotros-etiqueta">
          CONSEJOS Y NOVEDADES
        </span>
        <h1>Nuestro Blog</h1>
        <p>
          Descubre consejos para aprovechar al máximo
          tu ropa de trabajo.
        </p>
        <div className="nosotros-linea"></div>
      </section>

      <section className="container py-5">
        <div className="row g-4">
          {articulos.map((articulo) => (
            <div className="col-md-4" key={articulo.id}>
              <article className="blog-tarjeta">
                <span className="blog-categoria">
                  {articulo.categoria}
                </span>
                <h2>{articulo.titulo}</h2>
                <p>{articulo.descripcion}</p>
              </article>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Blog;