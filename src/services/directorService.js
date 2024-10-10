import { axiosConfig } from "../config/axiosConfig";

const headers = {
    'Contenr-Type' : 'application/json'
}

const crearDirector = (director) => {
    const data = {
        nombre: director.nombre
    }
    return axiosConfig.post('/directores', data, {
        headers : headers
    })
}

const obtenerDirectores = () => {
    return axiosConfig.get('/directores', {
        headers : headers
    })
}

const editarDirectorPorID = (director, id) => {
    const data = {
        nombre: director.nombre,
    }
    return axiosConfig.put('/directores/'+id, data, {
        headers : headers
    })
}

const obtenerDirectorPorID = (id) => {
    return axiosConfig.get('/directores'+id, {
        headers : headers
    })
}

export {
    crearDirector,
    obtenerDirectores,
    editarDirectorPorID,
    obtenerDirectorPorID
}