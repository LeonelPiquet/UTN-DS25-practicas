export default function Header() {
  return (
    <header className="bg-primary text-white p-4 d-flex align-items-center">
      <img
        src="../assets/imagenes/logotipo-libreria-dibujado-mano_23-2149331221.avif"
        alt="Logo"
        style={{ width: '80px', height: '80px', marginRight: '20px' }}
      />
      <h1 className="m-0">Nombre Librería</h1>
    </header>
  );
}
