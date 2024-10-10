import { useEffect, useState } from "react";
import React from 'react'
import { obtenerTipos } from "../../services/tipoService";
import { useNavigate } from 'react-router-dom';



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
                {tipos.map(tipo => (
                  <tr key={tipo._id}>
                    <td>{tipo._id}</td>
                    <td>{tipo.nombre}</td>
                    <td>{tipo.estado.toString()}</td>
                    <td>{tipo.fechaCreacion}</td>
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
