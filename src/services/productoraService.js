import { axiosConfig } from "../config/axiosConfig";

const headers = {
    'Contenr-Type' : 'application/json'
}

const crearProductora = (productora) => {
    const data = {
        nombre: productora.nombre,
        slogan: productora.slogan,
        descripcion: productora.descripcion
    }
    return axiosConfig.post('/productoras', data, {
        headers : headers
    })
}

const obtenerProductoras = () => {
    return axiosConfig.get('/productoras', {
        headers : headers
    })
}

const editarProductoraPorID = (productora, id) => {
    const data = {
        nombre: productora.nombre,
        descripcion: productora.descripcion
    }
    return axiosConfig.put('/productoras/'+id, data, {
        headers : headers
    })
}

const obtenerProductoraPorID = (id) => {
    return axiosConfig.get('/productoras'+id, {
        headers : headers
    })
}

export {
    crearProductora,
    obtenerProductoras,
    editarProductoraPorID,
    obtenerProductoraPorID
}