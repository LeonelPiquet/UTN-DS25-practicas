import Libro from './Libro';

export default function Seccion({ nombre, libros }) {
  return (
    <section className="mb-5">
      <h2 className="mb-4">{nombre}</h2>
      <div className="row">
        {libros.map((libro, i) => (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-3" key={i}>
            <Libro {...libro} />
          </div>
        ))}
      </div>
    </section>
  );
}
