export default function Libro({ seccion, imagen, titulo, autor }) {
  return (
    <div className="libro">
      <a href={seccion}>{titulo}</a>
      <img src={imagen} alt={`Tapa de ${titulo}`} />
      <h3>{titulo}</h3>
      <h4>{autor}</h4>
    </div>
  );
}
