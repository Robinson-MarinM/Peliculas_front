import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import { crearTipo } from "../../services/tipoService";


export default function AdminTipo() {

    const [tipo, setTipo] = useState({
        nombre: '',
        descripcion: '',
    });
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
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
        </div>
    );
}