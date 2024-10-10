import React, { useState } from 'react';
import { crearDirector } from '../../services/directorService';
import { useNavigate } from 'react-router-dom';

export default function AdminDirectores() {
    const navigate = useNavigate();
    // Estado para guardar los valores del formulario
    const [director, setDirector] = useState({
        nombre: ''
    });

    // Función para manejar los cambios en los campos del formulario
    const handleChange = (e) => {
        const { id, value } = e.target;
        setDirector({ ...director, [id]: value });
    };

    // Función para manejar el submit del formulario
    const handleSubmit = (e) => {
        e.preventDefault();  // Evitar el comportamiento por defecto del formulario
        crearDirector(director);  // Llamar a la función para crear el director con el objeto
        navigate('/directores')
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        className="form-control"
                        placeholder="Nombre"
                        value={director.nombre}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
        </div>
    );
}