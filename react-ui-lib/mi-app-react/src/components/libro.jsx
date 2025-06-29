export default function Libro({ seccion, imagen, titulo, autor }) {
  return (
    <div className="card h-100 shadow-sm">
      <a href={seccion}>
        <img src={imagen} className="card-img-top" alt={`Tapa de ${titulo}`} />
      </a>
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text text-muted">{autor}</p>
      </div>
    </div>
  );
}
