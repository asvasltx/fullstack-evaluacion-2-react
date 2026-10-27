import React from 'react';

const ProductCard = ({ producto, onAgregarAlCarrito }) => {
    if (!producto) return null;

    return (
        <article className="tarjeta-producto">
            <div className="imagen-contenedor">
                <img src={producto.imagen} alt={producto.nombre} />
            </div>
            <div className="info-producto">
                <span className="categoria-tag">{producto.categoria}</span>
                <h3>{producto.nombre}</h3>
                <p className="descripcion-corta">{producto.descripcion}</p>
                <p className="precio">${producto.precio.toLocaleString('es-CL')}</p>
                <button 
                    className="btn-comprar" 
                    onClick={() => onAgregarAlCarrito(producto)}
                >
                    Añadir al Carrito
                </button>
            </div>
        </article>
    );
};

export default ProductCard;