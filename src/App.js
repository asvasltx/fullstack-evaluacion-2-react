import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Importación de componentes
import ProductCard from './components/ProductCard';
import Carrito from './components/Carrito';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';

// Importación de datos y estilos
import { obtenerProductos } from './data/mockDB';
import './App.css'; 

function App() {
  // 1. Estados Globales
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [usuarioActivo, setUsuarioActivo] = useState(null); // Estado para controlar quién inició sesión

  // 2. Cargar productos iniciales
  useEffect(() => {
    setProductos(obtenerProductos());
  }, []);

  // 3. Funciones del Carrito
  const manejarAgregarAlCarrito = (producto) => {
    const existe = carrito.find(item => item.id === producto.id);
    if (existe) {
      setCarrito(carrito.map(item => 
        item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
      ));
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
    alert(`¡${producto.nombre} agregado al carrito!`);
  };

  const manejarCambiarCantidad = (id, delta) => {
    setCarrito(carrito.map(item => {
      if (item.id === id) {
        return { ...item, cantidad: Math.max(1, item.cantidad + delta) };
      }
      return item;
    }));
  };

  const manejarEliminar = (id) => {
    setCarrito(carrito.filter(item => item.id !== id));
  };

  const manejarLimpiar = () => {
    setCarrito([]);
  };

  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <Router>
      <div>
        {/* Navbar Global con Renderizado Condicional */}
        <header className="navbar" style={{ padding: '20px', backgroundColor: '#f8f9fa', display: 'flex', justifyContent: 'space-between' }}>
          <div className="logo">
              <Link to="/" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', fontSize: '24px' }}>
                WORKCLOTHES<span>.</span>
              </Link>
          </div>
          <div className="nav-acciones d-flex align-items-center gap-3">
              <Link to="/carrito" className="btn-carrito" style={{ textDecoration: 'none', color: 'inherit' }}> 
                🛒 Carrito (<span id="cart-count">{totalItems}</span>)
              </Link>
              
              {/* Lógica de botones según si hay usuario logueado o no */}
              {usuarioActivo ? (
                <div className="d-flex align-items-center gap-3">
                  <span className="fw-bold">{usuarioActivo.correo}</span>
                  {usuarioActivo.rol === 'admin' && (
                    <Link to="/admin" className="btn btn-outline-dark btn-sm">Panel Admin</Link>
                  )}
                  <button onClick={() => setUsuarioActivo(null)} className="btn btn-danger btn-sm">Salir</button>
                </div>
              ) : (
                <Link to="/login" className="btn btn-dark">Ingresar</Link>
              )}
          </div>
        </header>

        {/* Sistema de Rutas */}
        <Routes>
          {/* Ruta: Catálogo Principal */}
          <Route path="/" element={
            <main className="contenedor-seccion" style={{ padding: '40px' }}>
              <div className="encabezado-seccion" style={{ textAlign: 'center', marginBottom: '40px' }}>
                  <h2>Catálogo de Prendas</h2>
                  <p>Ropa de trabajo y uso diario confeccionada para máxima resistencia.</p>
              </div>
              <div className="grilla-productos" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {productos.map((productoActual) => (
                  <ProductCard 
                    key={productoActual.id} 
                    producto={productoActual} 
                    onAgregarAlCarrito={manejarAgregarAlCarrito} 
                  />
                ))}
              </div>
            </main>
          } />

          {/* Ruta: Carrito de Compras */}
          <Route path="/carrito" element={
            <Carrito 
              carrito={carrito}
              onCambiarCantidad={manejarCambiarCantidad}
              onEliminar={manejarEliminar}
              onLimpiar={manejarLimpiar}
            />
          } />

          {/* Ruta: Iniciar Sesión */}
          <Route path="/login" element={<Login onLogin={setUsuarioActivo} />} />

          {/* Ruta: Panel de Administrador */}
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;