import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from './ProductCard'; // Asegúrate de que la ruta sea correcta

describe('Pruebas unitarias en el componente <ProductCard />', () => {
    // Simulamos un producto de tu mockDB para las pruebas (Prueba de Props)
    const productoMock = {
        id: 1,
        nombre: 'Chaqueta Canvas Heavy-Duty',
        descripcion: 'Lona de algodón 12oz forrada.',
        precio: 49990,
        categoria: 'Chaquetas',
        imagen: 'img/chaqueta.jpg'
    };

    it('debe renderizar correctamente los datos del producto (Renderizado correcto)', () => {
        // Renderizamos el componente pasándole las props
        render(<ProductCard producto={productoMock} onAgregarAlCarrito={() => {}} />);
        
        // Verificamos que el nombre y el precio aparezcan en la pantalla
        expect(screen.getByText('Chaqueta Canvas Heavy-Duty')).toBeInTheDocument();
        expect(screen.getByText('$49.990')).toBeInTheDocument();
    });

    it('debe ejecutar la función onAgregarAlCarrito al hacer clic en el botón (Simulación de Eventos)', () => {
        // Creamos una función espía (mock) para ver si el botón la llama
        const funcionAgregarMock = jest.fn(); 
        
        render(<ProductCard producto={productoMock} onAgregarAlCarrito={funcionAgregarMock} />);
        
        // Buscamos el botón y simulamos un clic
        const boton = screen.getByText('Añadir al Carrito');
        fireEvent.click(boton);
        
        // Verificamos que la función se haya ejecutado 1 vez y con el producto correcto
        expect(funcionAgregarMock).toHaveBeenCalledTimes(1);
        expect(funcionAgregarMock).toHaveBeenCalledWith(productoMock);
    });
});