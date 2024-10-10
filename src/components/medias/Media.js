import React, { useEffect, useState } from 'react';
import { obtenerMedias } from '../../services/mediaService';
import { NavLink } from 'react-router-dom';

export default function Media() {
  const [medias, setMedias] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    listarMedias();
  }, []);

  const listarMedias = async () => {
    try {
      const { data } = await obtenerMedias();
      setMedias(data);
      setIsLoading(false);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container">
      <div>
        <NavLink
          to='/medias/create'
          className='nav-link btn btn-primary'
        >
          crear Media
        </NavLink>
      </div>
      {isLoading ? (
        <div>Cargando...</div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {medias.map((media) => (
            <div className="col" key={media.id}> {/* Asegúrate de tener una key única para cada elemento */}
              <div className="card">
                <img src={media.imagen} alt={media.titulo} />
                <div className="card-body">
                  <h5 className="card-title">{media.titulo}</h5>
                  <p className="card-text">{media.sinopsis}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
