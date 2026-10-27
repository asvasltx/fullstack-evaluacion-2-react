import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from './ProductCard';

describe('Pruebas unitarias en el componente <ProductCard />', () => {

    const productoMock = {
        id: 1,
        nombre: 'Chaqueta Canvas Heavy-Duty',
        descripcion: 'Lona de algodón 12oz forrada.',
        precio: 49990,
        categoria: 'Chaquetas',
        imagen: 'img/chaqueta.jpg'
    };

    it('debe renderizar correctamente los datos del producto (Renderizado correcto)', () => {
        render(<ProductCard producto={productoMock} onAgregarAlCarrito={() => {}} />);
        

        expect(screen.getByText('Chaqueta Canvas Heavy-Duty')).toBeInTheDocument();
        expect(screen.getByText('$49.990')).toBeInTheDocument();
    });

    it('debe ejecutar la función onAgregarAlCarrito al hacer clic en el botón (Simulación de Eventos)', () => {
        const funcionAgregarMock = jest.fn(); 
        
        render(<ProductCard producto={productoMock} onAgregarAlCarrito={funcionAgregarMock} />);
        
        const boton = screen.getByText('Añadir al Carrito');
        fireEvent.click(boton);
        
        expect(funcionAgregarMock).toHaveBeenCalledTimes(1);
        expect(funcionAgregarMock).toHaveBeenCalledWith(productoMock);
    });
});