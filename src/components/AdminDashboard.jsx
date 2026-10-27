import React, { useState, useEffect } from 'react';
import { obtenerProductos } from '../data/mockDB';

const AdminDashboard = () => {
    const [inventario, setInventario] = useState([]);

    useEffect(() => {
        // Cargamos los productos reales de tu mockDB
        setInventario(obtenerProductos());
    }, []);

    // Función simulada para cambiar roles
    const cambiarRol = (nombre, nuevoRol) => {
        alert(`Rol cambiado: ${nombre} ahora es ${nuevoRol}`);
    };

    return (
        <main className="contenedor-seccion" style={{ maxWidth: '1200px' }}>
            <div className="encabezado-seccion">
                <h2>Panel de Control</h2>
                <p>Monitoreo de existencias en bodega y administración de accesos al sistema.</p>
            </div>

            
            <section className="seccion-admin" id="inventario">
                <div className="barra-titulo-admin">
                    <h3>Control de Inventario</h3>
                    <span className="info-tag">Datos sincronizados con mockDB.js</span>
                </div>

                <div className="tabla-contenedor">
                    <table className="tabla-admin">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Prenda</th>
                                <th>Categoría</th>
                                <th>Precio</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inventario.map(producto => (
                                <tr key={producto.id}>
                                    <td>#{producto.id}</td>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.categoria}</td>
                                    <td>${producto.precio.toLocaleString('es-CL')}</td>
                                    <td><span className="badge badge-normal" style={{backgroundColor: '#16a34a', color: 'white', padding: '4px 8px', borderRadius: '4px'}}>En Stock</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            
            <section className="seccion-admin" id="usuarios" style={{ marginTop: '3.5rem' }}>
                <div className="barra-titulo-admin">
                    <h3>Gestión de Usuarios y Roles</h3>
                    <span className="info-tag">Control de permisos de acceso</span>
                </div>

                <div className="tabla-contenedor">
                    <table className="tabla-admin">
                        <thead>
                            <tr>
                                <th>RUN</th>
                                <th>Nombre Completo</th>
                                <th>Correo Electrónico</th>
                                <th>Rol Asignado</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>19.876.543-K</td>
                                <td>Gabriel Muñoz</td>
                                <td>g.munoz@duoc.cl</td>
                                <td>
                                    <select className="select-rol" defaultValue="Administrador" onChange={(e) => cambiarRol('Gabriel Muñoz', e.target.value)}>
                                        <option value="Administrador">Administrador</option>
                                        <option value="Vendedor">Vendedor</option>
                                        <option value="Cliente">Cliente</option>
                                    </select>
                                </td>
                                <td><span className="badge badge-normal">Activo</span></td>
                            </tr>
                            <tr>
                                <td>20.334.891-2</td>
                                <td>Camila Soto</td>
                                <td>camila.cliente@gmail.com</td>
                                <td>
                                    <select className="select-rol" defaultValue="Cliente" onChange={(e) => cambiarRol('Camila Soto', e.target.value)}>
                                        <option value="Administrador">Administrador</option>
                                        <option value="Vendedor">Vendedor</option>
                                        <option value="Cliente">Cliente</option>
                                    </select>
                                </td>
                                <td><span className="badge badge-normal">Activo</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
};

export default AdminDashboard;