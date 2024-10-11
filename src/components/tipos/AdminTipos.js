import React, { useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { crearTipo } from "../../services/tipoService";
import { obtenerTipoPorID } from '../../services/tipoService';


export default function AdminTipo() {
    const { id } = useParams();
    const [tipo, setTipo] = useState({
        nombre: '',
        descripcion: '',
        estado: 'Activo'
    });

    useEffect(() => {
        if (id) {
            cargarTipo(id);
        }
    }, [id]);

    const cargarTipo = async (id) => {
        const tipoObtenido = await obtenerTipoPorID(id);
        setearTipo(tipoObtenido);
    }

    const setearTipo = (tipo) => {
        const tipoEdit = {
            nombre: tipo.nombre,
            descripcion: tipo.descripcion,
            estado: (tipo.estado ? 'Activo' : 'Inactivo')
        }
        setTipo(tipoEdit);
    }

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setTipo({ ...tipo, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        crearTipo(tipo);
        navigate('/tipos')
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
                        value={tipo.nombre}
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
                        value={tipo.descripcion}
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
                            value={tipo.estado}
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