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

// const editarGeneroPorID = (genero, id) => {
//     const data = {
//         nombre: genero.nombre,
//         descripcion: genero.descripcion
//     }
//     return axiosConfig.put('/generos/'+id, data, {
//         headers : headers
//     })
// }

// const obtenerGeneroPorID = (id) => {
//     return axiosConfig.get('/generos'+id, {
//         headers : headers
//     })
// }

export {
    crearMedia,
    obtenerMedias,
    //     editarGeneroPorID,
    //     obtenerGeneroPorID
}