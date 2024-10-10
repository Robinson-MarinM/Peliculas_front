import React, { useState } from 'react';
import { crearGenero } from '../../services/generoService';
import { useNavigate } from 'react-router-dom';
export default function AdminGeneros() {
    const navigate = useNavigate();
    // Estado para guardar los valores del formulario
    const [genero, setGenero] = useState({
        nombre: '',
        descripcion: ''
    });

    // Función para manejar los cambios en los campos del formulario
    const handleChange = (e) => {
        const { id, value } = e.target;
        setGenero({ ...genero, [id]: value });
    };

    // Función para manejar el submit del formulario
    const handleSubmit = (e) => {
        e.preventDefault();  // Evitar el comportamiento por defecto del formulario
        crearGenero(genero);  // Llamar a la función para crear el género con el objeto
        navigate('/generos')
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
                        value={genero.nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Descripción</label>
                    <input
                        type="text"
                        id="descripcion"
                        className="form-control"
                        placeholder="Descripción"
                        value={genero.descripcion}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
        </div>
    );
}
