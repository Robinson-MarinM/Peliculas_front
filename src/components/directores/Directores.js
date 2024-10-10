import React, { useEffect, useState } from 'react'
import { obtenerDirectores } from '../../services/directorService'


export default function Directores() {

  const [directores, setDirectores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <div className="container">
      {isLoading ? (
        <div>Cargando...</div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <table className='table'>
            <thead>
              <th>id</th>
              <th>nombre</th>
              <th>estado</th>
              <th>fecha creacion</th>
            </thead>

            <tbody>
              {directores.map(director => (
                <tr key={director._id}>
                <td>{director._id}</td>
                <td>{director.nombre}</td>
                <td>{director.estado.toString()}</td>
                <td>{director.fechaCreacion}</td>
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
