import { axiosConfig } from "../config/axiosConfig";

const headers = {
    'Contenr-Type' : 'application/json'
}

const crearGenero = (genero) => {
    const data = {
        nombre: genero.nombre,
        descripcion: genero.descripcion
    }
    return axiosConfig.post('/generos', data, {
        headers : headers
    })
}

const obtenerGeneros = () => {
    return axiosConfig.get('/generos', {
        headers : headers
    })
}

const editarGeneroPorID = (genero, id) => {
    const data = {
        nombre: genero.nombre,
        descripcion: genero.descripcion
    }
    return axiosConfig.put('/generos/'+id, data, {
        headers : headers
    })
}

const obtenerGeneroPorID = (id) => {
    return axiosConfig.get('/generos'+id, {
        headers : headers
    })
}

export {
    crearGenero,
    obtenerGeneros,
    editarGeneroPorID,
    obtenerGeneroPorID
}