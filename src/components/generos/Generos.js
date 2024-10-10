import React, { useEffect, useState } from 'react'
import { obtenerGeneros } from '../../services/generoService'
import daysjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

export default function Generos() {

  const [generos, setGeneros] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    listarGeneros()
  }, [])

  const listarGeneros = async () => {
    try {
      const { data } = await obtenerGeneros()
      setGeneros(data);
      setIsLoading(false);
      console.log(data)



    } catch (e) {
      console.log(e)

    }
  }

  const agregar = () => { 
    navigate('/generos/create')
  }

  const formatDate = (date) => {
    return daysjs(date).format('DD/MM/YYYY');
  }

  const validateState = (state) => {
    return state ? 'Activo' : 'Inactivo';
  }

  return (
    <div className="container">
      <div>
        <button className="btn btn-primary" onClick={agregar}>
          Agregar Genero
        </button>
      </div>
      {isLoading ? (
        <div>Cargando...</div>
      ) : (
        <div className="row row-cols-1 row-cols-md-12 g-4">
          <div className="col">
            <table className='table'>
              <thead>
                <th>nombre</th>
                <th>descripcion</th>
                <th>estado</th>
                <th>fecha creacion</th>
                <th>Acciones</th>
              </thead>

              <tbody>
                {generos.map(genero => (
                  <tr key={genero._id}>
                    <td>{genero.nombre}</td>
                    <td>{genero.descripcion}</td>
                    <td>{validateState(genero.estado)}</td>
                    <td>{formatDate(genero.fechaCreacion)}</td>
                    <td>
                      <button className="btn btn-warning">
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
