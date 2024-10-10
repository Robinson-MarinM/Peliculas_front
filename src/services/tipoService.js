import { axiosConfig } from "../config/axiosConfig";

const headers = {
    'Contenr-Type' : 'application/json'
}

const crearTipo = (tipo) => {
    const data = {
        nombre: tipo.nombre,
        descripcion: tipo.descripcion
    }
    return axiosConfig.post('/tipos', data, {
        headers : headers
    })
}

const obtenerTipos = () => {
    return axiosConfig.get('/tipos', {
        headers : headers
    })
}

const editarTipoPorID = (tipo, id) => {
    const data = {
        nombre: tipo.nombre,
    }
    return axiosConfig.put('/tipos/'+id, data, {
        headers : headers
    })
}

const obtenerTipoPorID = (id) => {
    return axiosConfig.get('/tipos'+id, {
        headers : headers
    })
}

export {
    crearTipo,
    obtenerTipos,
    editarTipoPorID,
    obtenerTipoPorID
}
