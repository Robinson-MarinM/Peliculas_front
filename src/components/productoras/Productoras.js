import React, { useEffect, useState } from 'react'
import { obtenerProductoras } from '../../services/productoraService'
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';


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
        onClick = {navigateAdminProductora}
      >Agregar Productora</button>
      {isLoading ? (
        <div>Cargando...</div>
      ) : (
        <div className="row row-cols-1 row-cols-md-12 g-4">
        <div className="col">
          <table className='table'>
            <thead>
              <th>nombre</th>
              <th>slogan</th>
              <th>descripcion</th>
              <th>estado</th>
              <th>fecha creacion</th>
              <th>Acciones</th>
            </thead>

            <tbody>
              {productoras.map(productora => (
                <tr key={productora._id}>
                <td>{productora.nombre}</td>
                <td>{productora.descripcion}</td>
                <td>{productora.slogan}</td>
                <td>{validateState(productora.estado)}</td>
                <td>{formatDate(productora.fechaCreacion)}</td>
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
