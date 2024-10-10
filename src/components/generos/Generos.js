import React, { useEffect, useState } from 'react'
import { obtenerGeneros } from '../../services/generoService'
import { NavLink } from 'react-router-dom';

export default function Generos() {

  const [generos, setGeneros] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const agregar = () => { }

  return (
    <div className="container">
      <div>
        <NavLink
          to='/generos/create'
          className='nav-link btn btn-primary'
        >
          crear Genero
        </NavLink>
      </div>
      {isLoading ? (
        <div>Cargando...</div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <table className='table'>
              <thead>
                <th>id</th>
                <th>nombre</th>
                <th>descripcion</th>
                <th>estado</th>
                <th>fecha creacion</th>
              </thead>

              <tbody>
                {generos.map(genero => (
                  <tr key={genero._id}>
                    <td>{genero._id}</td>
                    <td>{genero.nombre}</td>
                    <td>{genero.descripcion}</td>
                    <td>{genero.estado.toString()}</td>
                    <td>{genero.fechaCreacion}</td>
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
