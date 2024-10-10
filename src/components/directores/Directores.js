import React, { useEffect, useState } from 'react'
import { obtenerDirectores } from '../../services/directorService'
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';


export default function Directores() {

  const [directores, setDirectores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    listarDirectores()
  }, [])

  const listarDirectores = async () => {
    try {
      const { data } = await obtenerDirectores()
      setDirectores(data);
      setIsLoading(false);
      console.log(data)

    } catch (e) {
      console.log(e)

    }


  }

  const navigateAdminDirector  = () => {
    navigate('/directores/create')
  };

  const formatDate = (date) => {
    return dayjs(date).format('DD/MM/YYYY');
  }

  const validateState = (state) => {
    return state ? 'Activo' : 'Inactivo';
  }

  return (
    <div className="container">
      <button
        className="btn btn-primary"
        onClick = {navigateAdminDirector}
      >Agregar Director</button>
      {isLoading ? (
        <div>Cargando...</div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <table className='table'>
              <thead>
                <th>nombre</th>
                <th>estado</th>
                <th>fecha creacion</th>
                <th>Acciones</th>
              </thead>

              <tbody>
                {directores.map(director => (
                  <tr key={director._id}>
                    <td>{director.nombre}</td>
                    <td>{validateState(director.estado)}</td>
                    <td>{formatDate(director.fechaCreacion)}</td>
                    <td>
                      <button className="btn btn-warning">
                        Editar
                      </button>
                      <button className="btn btn-danger">
                        Eliminar
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
