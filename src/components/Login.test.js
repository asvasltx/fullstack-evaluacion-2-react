import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';


jest.mock('react-router-dom', () => ({
    useNavigate: () => jest.fn(), 
    Link: ({ children }) => <a href="/dummy">{children}</a>
}));

describe('Pruebas unitarias en el componente <Login />', () => {
    it('debe actualizar el estado cuando el usuario escribe (Prueba de Estado)', () => {
        render(<Login onLogin={() => {}} />);

        // Buscamos el campo de correo por su placeholder
        const inputCorreo = screen.getByPlaceholderText('nombre@gmail.com o @duoc.cl');
        
        // Simulamos que el usuario teclea un correo
        fireEvent.change(inputCorreo, { target: { value: 'profe@duoc.cl' } });
        
        // Verificamos que el estado interno del componente se actualizó correctamente
        expect(inputCorreo.value).toBe('profe@duoc.cl');
    });
});