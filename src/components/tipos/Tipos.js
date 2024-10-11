import { useEffect, useState } from "react";
import React from 'react'
import { obtenerTipos } from "../../services/tipoService";
import { useNavigate } from 'react-router-dom';
import dayjs from "dayjs";



export default function Tipos() {
  const [tipos, setTipos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    listarTipos()
  }, [])

  const listarTipos = async () => {
    try {
      const { data } = await obtenerTipos()
      setTipos(data);
      setIsLoading(false);
      console.log(data)
      
    } catch (e) {
      console.log(e)
      
    }
  }

  const navigateAdminTipo = () => {
    navigate('/tipos/create')
  };

  const formatDate = (date) => {
    return dayjs(date).format('DD/MM/YYYY');
  }

  const validateState = (state) => {
    return state ? 'Activo' : 'Inactivo';
  }

  const editTipo = (id) => {
    navigate(`/tipos/edit/${id}`)
  }

  return (
    <div>
      <h1>Tipos</h1>
      <button
        className="btn btn-primary"
        onClick = {navigateAdminTipo}
      >Agregar Tipo</button>
      {isLoading ? (
        <div>Cargando...</div>
      ) : (
        <div className="row row-cols-1 row-cols-md-12 g-4">
          <div className="col">
            <table className='table'>
              <thead>
                <th>nombre</th>
                <th>estado</th>
                <th>fecha creacion</th>
                <th>Acciones</th>
              </thead>

              <tbody>
                {tipos.map(tipo => (
                  <tr key={tipo._id}>
                    <td>{tipo.nombre}</td>
                    <td>{validateState(tipo.estado)}</td>
                    <td>{formatDate(tipo.fechaCreacion)}</td>
                    <td>
                      <button className="btn btn-warning" onClick={editTipo(tipo._id)}>
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="btn btn-danger">
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
    
  )
}
