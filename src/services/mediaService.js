import { axiosConfig } from "../config/axiosConfig";

const headers = {
    'Contenr-Type': 'application/json'
}

const crearMedia = (media) => {
    const data = {
        serial: media.serial,
        titulo: media.titulo,
        sinopsis: media.sinopsis,
        url: media.url,
        imagenPortada: media.imagenPortada,
        fechaEstreno: media.fechaEstreno,
        Genero: media.Genero,
        Director: media.Director,
        Productora: media.Productora,
        Tipo: media.Tipo
    }
    return axiosConfig.post('/medias', data, {
        headers: headers
    })
}

const obtenerMedias = () => {
    return axiosConfig.get('/medias', {
        headers: headers
    })
}

 const editarMediaPorID = (media, id) => {
     const data = {
        serial: media.serial,
        titulo: media.titulo,
        sinopsis: media.sinopsis,
        url: media.url,
        imagenPortada: media.imagenPortada,
        fechaEstreno: media.fechaEstreno,
        estado: validateState(media.estado),
        Genero: media.Genero,
        Director: media.Director,
        Productora: media.Productora,
        Tipo: media.Tipo
     }
     return axiosConfig.put('/medias/'+id, data, {
         headers : headers
     })
}

const validateState = (state) => {
    if (state === 'Activo') {
        return 'true'
    } else {
        return 'false'
    }
}

const obtenerMediaPorID = (id) => {
    return axiosConfig.get('/medias/'+id, {
        headers : headers
    })
}

const eliminarMediaPorID = (id) => {
    return axiosConfig.delete('/medias/'+id, {
        headers : headers
    })
}

export {
    crearMedia,
    obtenerMedias,
    editarMediaPorID,
    obtenerMediaPorID,
    eliminarMediaPorID
}