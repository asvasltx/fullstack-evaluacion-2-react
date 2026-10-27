import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Registro = ({ onLogin }) => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [clave, setClave] = useState('');
    const [confirmarClave, setConfirmarClave] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const manejarSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (nombre.trim() === '' || correo.trim() === '' || clave.trim() === '') {
            setError('Por favor, completa todos los campos.');
            return;
        }

        if (clave !== confirmarClave) {
            setError('Las contraseñas no coinciden.');
            return;
        }

        alert(`¡Cuenta creada con éxito, bienvenido ${nombre}!`);
        
        onLogin({ correo, rol: 'cliente', nombre });
        navigate('/'); 
    };

    return (
        <main className="contenedor-seccion">
            <div className="tarjeta-formulario">
                <div className="encabezado-form">
                    <h2>Crear Cuenta</h2>
                    <p>Únete a Workclothes</p>
                </div>

                <form onSubmit={manejarSubmit}>
                    <div className="grupo-campo">
                        <label htmlFor="nombre">Nombre Completo</label>
                        <input 
                            type="text" 
                            id="nombre" 
                            placeholder="Ej: Gabriel"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>

                    <div className="grupo-campo">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="nombre@gmail.com"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                        />
                    </div>

                    <div className="grupo-campo">
                        <label htmlFor="password">Contraseña</label>
                        <input 
                            type="password" 
                            id="password" 
                            placeholder="Crea una contraseña"
                            value={clave}
                            onChange={(e) => setClave(e.target.value)}
                        />
                    </div>

                    <div className="grupo-campo">
                        <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            placeholder="Repite tu contraseña"
                            value={confirmarClave}
                            onChange={(e) => setConfirmarClave(e.target.value)}
                        />
                        {error && <span className="error-mensaje" style={{ color: 'red', display: 'block', marginTop: '5px' }}>{error}</span>}
                    </div>

                    <button type="submit" className="btn-formulario">Registrarse</button>

                    <p className="pie-formulario">
                        ¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link>
                    </p>
                </form>
            </div>
        </main>
    );
};

export default Registro;