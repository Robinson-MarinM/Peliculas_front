import React, { useState } from 'react';
import { crearDirector } from '../../services/directorService';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerDirectorPorID } from '../../services/directorService';

export default function AdminDirectores() {
    const navigate = useNavigate();
    const { id } = useParams();
    
    const [director, setDirector] = useState({
        nombre: '',
        estado: 'Activo'
    });

    useEffect(() => {
        if (id) {
            cargarDirector(id);
        }
    }, [id]);

    const cargarDirector = async (id) => {
        const directorObtenido = await obtenerDirectorPorID(id);
        setearDirector(directorObtenido);
    }

    const setearDirector = (director) => {
        const directorEdit = {
            nombre: director.nombre,
            estado: (director.estado ? 'Activo' : 'Inactivo')
        }
        setDirector(directorEdit);
    }

    // Función para manejar los cambios en los campos del formulario
    const handleChange = (e) => {
        const { id, value } = e.target;
        setDirector({ ...director, [id]: value });
    };

    // Función para manejar el submit del formulario
    const handleSubmit = (e) => {
        if (id === undefined) {
        e.preventDefault();  // Evitar el comportamiento por defecto del formulario
        crearDirector(director);  // Llamar a la función para crear el director con el objeto
        navigate('/directores')
        } else {
            e.preventDefault();
            crearDirector(director, id);
            navigate('/directores')
        }
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
                {id && (
                    <div className="mb-3">
                        <label htmlFor="estado" className="form-label">Estado</label>
                        <select
                            id="estado"
                            name='estado'
                            className="form-select"
                            value={director.estado}
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