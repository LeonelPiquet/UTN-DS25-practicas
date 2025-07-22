export default function Libro({ imagen, titulo, autor }) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={imagen}
        className="card-img-top"
        alt={`Tapa de ${titulo}`}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text text-muted">{autor}</p>
      </div>
    </div>
  );
}
