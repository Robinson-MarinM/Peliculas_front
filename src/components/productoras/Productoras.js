import React, { useEffect, useState } from 'react'
import { obtenerProductoras } from '../../services/productoraService'
import { useNavigate } from 'react-router-dom';


export default function Productoras() {

  const [productoras, setProductoras] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    listarProductoras()
  }, [])

  const listarProductoras = async () => {
    try {
      const { data } = await obtenerProductoras()
      setProductoras(data);
      setIsLoading(false);
      console.log(data)
      
    } catch (e) {
      console.log(e)
      
    }

  }

  const navigateAdminProductora  = () => {
    navigate('/productoras/create')
  };

  return (
    <div className="container">
      <button
        className="btn btn-primary"
        onClick = {navigateAdminProductora}
      >Agregar Productora</button>
      {isLoading ? (
        <div>Cargando...</div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <table className='table table-striped'>
            <thead>
              <th>id</th>
              <th>nombre</th>
              <th>slogan</th>
              <th>descripcion</th>
              <th>estado</th>
              <th>fecha creacion</th>
            </thead>

            <tbody>
              {productoras.map(productora => (
                <tr key={productora._id}>
                <td>{productora._id}</td>
                <td>{productora.nombre}</td>
                <td>{productora.descripcion}</td>
                <td>{productora.slogan}</td>
                <td>{productora.estado.toString()}</td>
                <td>{productora.fechaCreacion}</td>
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
