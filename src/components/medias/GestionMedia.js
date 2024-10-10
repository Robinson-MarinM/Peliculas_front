import React, { useState } from 'react';
import { crearMedia } from '../../services/mediaService';
import { useNavigate } from 'react-router-dom';
export default function GestionMedia() {
    const navigate = useNavigate();
    // Estado para guardar los valores del formulario
    const [media, setMedia] = useState({
      serial: '', 
      titulo: '', 
      sinopsis: '', 
      url: '', 
      imagen: '', 
      fechaEstreno: '', 
      Genero: '', 
      Director: '', 
      Productora: '', 
      Tipo: ''
    });

    // Función para manejar los cambios en los campos del formulario
    const handleChange = (e) => {
        const { id, value } = e.target;
        setMedia({ ...media, [id]: value });
    };

    // Función para manejar el submit del formulario
    const handleSubmit = (e) => {
        e.preventDefault();  // Evitar el comportamiento por defecto del formulario
        crearMedia(media);  // Llamar a la función para crear el género con el objeto
        navigate('/medias')
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                    <label htmlFor="serial" className="form-label">Titulo</label>
                    <input
                        type="text"
                        id="serial"
                        className="form-control"
                        placeholder="serial"
                        value={media.serial}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="titulo" className="form-label">Titulo</label>
                    <input
                        type="text"
                        id="titulo"
                        className="form-control"
                        placeholder="Titulo"
                        value={media.titulo}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="sinopsis" className="form-label">Sinopsis</label>
                    <input
                        type="text"
                        id="sinopsis"
                        className="form-control"
                        placeholder="Sinopsis"
                        value={media.sinopsis}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="url" className="form-label">Url</label>
                    <input
                        type="text"
                        id="url"
                        className="form-control"
                        placeholder="Url"
                        value={media.url}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="imagen" className="form-label">Imagen</label>
                    <input
                        type="text"
                        id="imagen"
                        className="form-control"
                        placeholder="Imagen"
                        value={media.imagenPortada}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="fechaEstreno" className="form-label">fecha de estreno</label>
                    <input
                        type="text"
                        id="fechaEstreno"
                        className="form-control"
                        placeholder="Fecha de estreno"
                        value={media.fechaEstreno}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Genero" className="form-label">Genero</label>
                    <input
                        type="text"
                        id="Genero"
                        className="form-control"
                        placeholder="Genero"
                        value={media.Genero}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Director" className="form-label">Director</label>
                    <input
                        type="text"
                        id="Director"
                        className="form-control"
                        placeholder="Director"
                        value={media.Director}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Productora" className="form-label">Productora</label>
                    <input
                        type="text"
                        id="Productora"
                        className="form-control"
                        placeholder="Productora"
                        value={media.Productora}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Tipo" className="form-label">Tipo</label>
                    <input
                        type="text"
                        id="Tipo"
                        className="form-control"
                        placeholder="Tipo"
                        value={media.Tipo}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
        </div>
    );
}
