import React, { useEffect, useState } from 'react';
import { obtenerMedias, eliminarMediaPorID } from '../../services/mediaService';
import { useNavigate } from 'react-router-dom';

export default function Media() {
  const [medias, setMedias] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

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
  const deleteMedia = (id) => {
    return () => {
      eliminarMediaPorID(id);
      window.location.reload();
    };
  };
  const navigateAdminMedia = () => {
    navigate('/medias/create');
  }

  const editMedia = (id) => {
    return () => {
      navigate(`/medias/edit/${id}`);
    }
  }
  return (
    <div className="container">

      <button className="btn btn-primary" onClick={navigateAdminMedia}>
        Agregar Media
      </button>

      {isLoading ? (
        <div>Cargando...</div>
      ) : (medias.map((media) => (
        <div className="row row-cols-1 row-cols-md-2 g-4" key={media.id} >
          <div className="col"> {/* Asegúrate de tener una key única para cada elemento */}
            <div className="card" onClick={editMedia(media._id)}>
              <img src={media.imagenPortada} alt={media.titulo} />
              <div className="card-body">
                <h5 className="card-title">{media.titulo}</h5>
                <p className="card-text">{media.sinopsis}</p>
              </div>
            </div>
            <button className="btn btn-danger" onClick={deleteMedia(media._id)}>
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </div>
      )))}
    </div>
  );
}
