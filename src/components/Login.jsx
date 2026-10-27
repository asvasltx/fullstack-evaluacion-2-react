import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const [correo, setCorreo] = useState('');
    const [clave, setClave] = useState('');
    const [error, setError] = useState(''); // Para mostrar errores como en tu HTML
    const navigate = useNavigate();

    const manejarSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (correo.trim() === '' || clave.trim() === '') {
            setError('Por favor, completa todos los campos.');
            return;
        }

        // Lógica de simulación de roles
        if (correo.endsWith('@duoc.cl') || correo === 'admin@workclothes.cl') {
            onLogin({ correo, rol: 'admin' });
            navigate('/admin'); 
        } else {
            onLogin({ correo, rol: 'cliente' });
            navigate('/'); 
        }
    };

    return (
        <main className="contenedor-seccion">
            <div className="tarjeta-formulario">
                <div className="encabezado-form">
                    <h2>Iniciar Sesión</h2>
                    <p>Accede a tu cuenta de Workclothes</p>
                </div>

                <form id="form-login" onSubmit={manejarSubmit}>
                    <div className="grupo-campo">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="nombre@gmail.com o @duoc.cl"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                        />
                    </div>

                    <div className="grupo-campo">
                        <label htmlFor="password">Contraseña</label>
                        <input 
                            type="password" 
                            id="password" 
                            placeholder="Entre 4 y 10 caracteres"
                            value={clave}
                            onChange={(e) => setClave(e.target.value)}
                        />
                        {error && <span className="error-mensaje" style={{ color: 'red', display: 'block', marginTop: '5px' }}>{error}</span>}
                    </div>

                    <button type="submit" className="btn-formulario">Entrar</button>

                    <p className="pie-formulario">
                        ¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>
                    </p>
                </form>
            </div>
        </main>
    );
};

export default Login;