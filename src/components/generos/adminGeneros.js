import React, { useState, useEffect } from 'react';
import { crearGenero, obtenerGeneroPorID } from '../../services/generoService';
import { useNavigate, useParams } from 'react-router-dom';
export default function AdminGeneros() {

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect = (() => {
        if (id) {
            cargarGenero(id);
        }
    }, [id]);

    const [genero, setGenero] = useState({
        nombre: '',
        descripcion: '',
        estado: 'Active'
    });

    const cargarGenero = async (id) => {
        const generoObtenido = await obtenerGeneroPorID(id);
        seteargenero(generoObtenido);
    }

    const seteargenero = (genero) => {
        const generoEdit = {
            nombre: genero.nombre,
            descripcion: genero.descripcion,
            estado: (genero.estado ? 'Activo' : 'Inactivo')
        }
        setGenero(generoEdit);
    }
    

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
                {id && (
                    <div className="mb-3">
                        <label htmlFor="estado" className="form-label">Estado</label>
                        <select
                            id="estado"
                            name='estado'
                            className="form-select"
                            value={genero.estado}
                            onChange={handleChange}
                        >
                            <option value="Activo">Activo</option>
                            <option value="Inactivo">Inactivo</option>
                        </select>
                    </div>
                )}
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
        </div>
    );
}
