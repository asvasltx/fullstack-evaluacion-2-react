import React from 'react';
import { useNavigate } from 'react-router-dom';

const Carrito = ({ carrito, onCambiarCantidad, onEliminar, onLimpiar }) => {
    const navigate = useNavigate();
    // Calcula el total sumando el precio por la cantidad de cada producto
    const totalPrecio = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <h2>Carrito de Compras</h2>
                    
                    {carrito.length === 0 ? (
                        <div className="alert alert-info">Tu carrito está vacío.</div>
                    ) : (
                        <>
                            <div className="table-responsive">
                                <table className="table table-striped" id="cart-table">
                                    <thead>
                                        <tr>
                                            <th>Imagen</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th>Subtotal</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {carrito.map((item) => (
                                            <tr key={item.id}>
                                                <td>
                                                    <img src={item.imagen} alt={item.nombre} style={{ width: '50px', borderRadius: '5px' }} />
                                                </td>
                                                <td>{item.nombre}</td>
                                                <td>${item.precio.toLocaleString('es-CL')}</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <button 
                                                            className="btn btn-outline-secondary btn-sm" 
                                                            onClick={() => onCambiarCantidad(item.id, -1)}
                                                            disabled={item.cantidad <= 1}
                                                        > - </button>
                                                        
                                                        <span className="mx-2">{item.cantidad}</span>
                                                        
                                                        <button 
                                                            className="btn btn-outline-secondary btn-sm" 
                                                            onClick={() => onCambiarCantidad(item.id, 1)}
                                                        > + </button>
                                                    </div>
                                                </td>
                                                <td>${(item.precio * item.cantidad).toLocaleString('es-CL')}</td>
                                                <td>
                                                    <button 
                                                        className="btn btn-danger btn-sm" 
                                                        onClick={() => onEliminar(item.id)}
                                                    >
                                                        Eliminar
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <td colSpan="4" className="text-end fw-bold">Total</td>
                                            <td colSpan="2" className="fw-bold fs-5">${totalPrecio.toLocaleString('es-CL')}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="text-end mt-3">
                                <button className="btn btn-secondary btn-lg me-2" onClick={onLimpiar}>
                                    Limpiar Carrito
                                </button>
                                <button
    className="btn btn-success btn-lg"
    onClick={() => navigate('/checkout')}
>
    Comprar ahora
</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Carrito;