import React from 'react';
import Libro from './libro';

const Seccion = ({ nombre, libros }) => {
  return (
    <div className="seccion">
      <h2>{nombre}</h2>
      <div className="libros">
        {libros.map((libro, i) => (
          <Libro key={i} {...libro} />
        ))}
      </div>
    </div>
  );
};

export default Seccion;

