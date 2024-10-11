import React, { useEffect, useState } from 'react';
import { crearMedia, obtenerMediaPorID, editarMediaPorID } from '../../services/mediaService';
import { useNavigate, useParams } from 'react-router-dom';
import { obtenerDirectores } from '../../services/directorService';
import { obtenerProductoras } from '../../services/productoraService';
import { obtenerGeneros } from '../../services/generoService';
import { obtenerTipos } from '../../services/tipoService';

export default function GestionMedia() {
    const [directores, setDirectores] = useState([]);
    const [productoras, setProductoras] = useState([]);
    const [generos, setGeneros] = useState([]);
    const [tipos, setTipos] = useState([]);
    const { id } = useParams(); // Obtener el ID de la URL

    useEffect(() => {
        listarDirectores();
        listarProductoras();
        listarGeneros();
        listarTipos();
        if (id) {
            cargarMedia(id); // Si hay un ID, cargamos la media correspondiente
        }
    }, [id]);

    // Función para cargar la media según el ID
    const cargarMedia = async (id) => {
        try {
            const { data } = await obtenerMediaPorID(id); // Suponiendo que tienes esta función en mediaService
            setEditMedia(data); // Rellenar el formulario con los datos de la media
        } catch (error) {
            console.log(error);
        }
    };

    const setEditMedia = (data) => {
        const mediaEdit = {
            serial: data.serial,
            titulo: data.titulo,
            sinopsis: data.sinopsis,
            url: data.url,
            imagenPortada: data.imagenPortada,
            fechaEstreno: data.fechaEstreno,
            estado: data.estado ? 'Activo' : 'Inactivo',
            Genero: data.Genero._id,
            Director: data.Director._id,
            Productora: data.Productora._id,
            Tipo: data.Tipo._id
        }
        setMedia(mediaEdit);
    }

    const listarDirectores = async () => {
        try {
            const { data } = await obtenerDirectores();
            setDirectores(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    const listarProductoras = async () => {
        try {
            const { data } = await obtenerProductoras();
            setProductoras(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    const listarGeneros = async () => {
        try {
            const { data } = await obtenerGeneros();
            setGeneros(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    const listarTipos = async () => {
        try {
            const { data } = await obtenerTipos();
            setTipos(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    const navigate = useNavigate();
    // Estado para guardar los valores del formulario
    const [media, setMedia] = useState({
        serial: '',
        titulo: '',
        sinopsis: '',
        url: '',
        imagenPortada: '',
        fechaEstreno: '',
        estado: 'Activo',
        Genero: '',
        Director: '',
        Productora: '',
        Tipo: ''
    });

    // Función para manejar los cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setMedia({
            ...media,
            [name]: value
        });
    };

    // Función para manejar el submit del formulario
    const handleSubmit = (e) => {
        e.preventDefault();  // Evitar el comportamiento por defecto del formulario
        if (media.Genero === '' || media.Director === '' || media.Productora === '' || media.Tipo === '') {
            alert('Debe seleccionar un género, director, productora y tipo');
            return;
        }
        if (media.fechaEstreno === '') {
            alert('Debe seleccionar una fecha de estreno');
            return;
        }
        if (media.imagenPortada === '') {
            alert('Debe seleccionar una imagen de portada');
            return;
        }
        if (media.url === '') {
            alert('Debe seleccionar una url');
            return;
        }
        if (media.sinopsis === '') {
            alert('Debe seleccionar una sinopsis');
            return;
        }
        if (media.titulo === '') {
            alert('Debe seleccionar un titulo');
            return;
        }
        if (media.serial === '') {
            alert('Debe seleccionar un serial');
            return;
        }
        if (media.genero === ('Seleccione un Género')
            || media.director === ('Seleccione un Director')
            || media.productora === ('Seleccione una Productora')
            || media.tipo === ('Seleccione un Tipo')) {
            alert('Debe seleccionar un género, director, productora y tipo');
            return;
        }
        if (id === undefined) {
            console.log(media);
            crearMedia(media);  // Llamar a la función para crear el género con el objeto
            navigate('/medias')
        } else {
            console.log(media);
            editarMediaPorID(media, id);
            navigate('/medias')
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="serial" className="form-label">Titulo</label>
                    <input
                        type="text"
                        id="serial"
                        name='serial'
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
                        name='titulo'
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
                        name='sinopsis'
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
                        name='url'
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
                        id="imagenPortada"
                        name='imagenPortada'
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
                        name='fechaEstreno'
                        className="form-control"
                        placeholder="Fecha de estreno"
                        value={media.fechaEstreno}
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
                            value={media.estado}
                            onChange={handleChange}
                        >
                            <option value="Activo">Activo</option>
                            <option value="Inactivo">Inactivo</option>
                        </select>
                    </div>
                )}
                <div className="mb-3">
                    <label htmlFor="Genero" className="form-label">Genero</label>
                    <select
                        id="Genero"
                        name='Genero'
                        className="form-select"
                        value={media.Genero}
                        onChange={handleChange}
                    ><option value="">Seleccione un Género</option>
                        {generos.map((genero) => (
                            <option key={genero._id} value={genero._id}>{genero.nombre}</option>
                        ))} </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="Director" className="form-label">Director</label>
                    <select
                        id="Director"
                        name='Director'
                        className="form-select"
                        value={media.Director}
                        onChange={handleChange}
                    ><option value="">Seleccione un Director</option>
                        {directores.map((director) => (
                            <option key={director._id} value={director._id}>{director.nombre}</option>
                        ))} </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="Productora" className="form-label">Productora</label>

                    <select
                        id="Productora"
                        name='Productora'
                        className="form-select"
                        value={media.Productora}
                        onChange={handleChange}
                    ><option value="">Seleccione una Productora</option>
                        {productoras.map((productora) => (
                            <option key={productora._id} value={productora._id}>{productora.nombre}</option>
                        ))} </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="Tipo" className="form-label">Tipo</label>
                    <select
                        id="Tipo"
                        name='Tipo'
                        className="form-select"
                        value={media.Tipo}
                        onChange={handleChange}
                    ><option value="">Seleccione un Tipo</option>
                        {tipos.map((tipo) => (
                            <option key={tipo._id} value={tipo._id}>{tipo.nombre}</option>
                        ))} </select>
                </div>
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
        </div>
    );
}
