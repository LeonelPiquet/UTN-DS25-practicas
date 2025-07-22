import React, { useState } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Seccion from '../components/Seccion';

const seccionesIniciales = [
  {
    nombre: 'Ficción',
    libros: [
      { titulo: '1984', autor: 'George Orwell', imagen: 'https://via.placeholder.com/200x300?text=1984' },
      { titulo: 'El túnel', autor: 'Ernesto Sabato', imagen: 'https://via.placeholder.com/200x300?text=El+Tunel' },
    ],
  },
  {
    nombre: 'Fantasía',
    libros: [
      { titulo: 'Harry Potter', autor: 'J.K. Rowling', imagen: 'https://via.placeholder.com/200x300?text=HP' },
      { titulo: 'El nombre del viento', autor: 'Patrick Rothfuss', imagen: 'https://via.placeholder.com/200x300?text=Nombre+del+Viento' },
    ],
  },
  {
    nombre: 'Ciencia',
    libros: [
      { titulo: 'Breves respuestas a las grandes preguntas', autor: 'Stephen Hawking', imagen: 'https://via.placeholder.com/200x300?text=Hawking' },
    ],
  },
];

export default function Home() {
  const [catalogo, setCatalogo] = useState(seccionesIniciales);
  const [busqueda, setBusqueda] = useState('');

  const handleAgregarLibro = (e) => {
    e.preventDefault();
    const nuevo = Object.fromEntries(new FormData(e.target));
    nuevo.imagen = 'https://via.placeholder.com/200x300?text=' + encodeURIComponent(nuevo.titulo);

    setCatalogo((prev) => {
      const i = prev.findIndex((s) => s.nombre.toLowerCase() === nuevo.seccion.toLowerCase());
      if (i !== -1) {
        const actualizada = [...prev];
        actualizada[i].libros.push(nuevo);
        return actualizada;
      } else {
        return [...prev, { nombre: nuevo.seccion, libros: [nuevo] }];
      }
    });

    e.target.reset();
  };

  const librosFiltrados = catalogo.map((seccion) => ({
    ...seccion,
    libros: seccion.libros.filter((libro) =>
      libro.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      libro.autor.toLowerCase().includes(busqueda.toLowerCase())
    ),
  })).filter((s) => s.libros.length > 0);

  return (
    <>
      <Header />
      <div className="container my-4">
        <div className="row">
          <aside className="col-md-3">
            <Menu />
          </aside>
          <main className="col-md-9">
            <form className="mb-4" onSubmit={handleAgregarLibro}>
              <h4>Agregar nuevo libro</h4>
              <div className="mb-2">
                <input name="titulo" className="form-control" placeholder="Título" required />
              </div>
              <div className="mb-2">
                <input name="autor" className="form-control" placeholder="Autor" required />
              </div>
              <div className="mb-2">
                <input name="seccion" className="form-control" placeholder="Sección" required />
              </div>
              <button type="submit" className="btn btn-primary">Agregar libro</button>
            </form>

            <div className="mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar por título o autor"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </div>

            {librosFiltrados.map((seccion, i) => (
              <Seccion key={i} nombre={seccion.nombre} libros={seccion.libros} />
            ))}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}