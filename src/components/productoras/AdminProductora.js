import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import { crearProductora } from "../../services/productoraService";

export default function AdminProductora() {

    const [productora, setProductora] = useState({
        nombre: '',
        slogan: '',
        descripcion: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setProductora({ ...productora, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        crearProductora(productora);
        navigate('/productoras')
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
                        value={productora.nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="slogan" className="form-label">Slogan</label>
                    <input
                        type="text"
                        id="slogan"
                        className="form-control"
                        placeholder="Slogan"
                        value={productora.slogan}
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
                        value={productora.descripcion}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
        </div>
    );
}
