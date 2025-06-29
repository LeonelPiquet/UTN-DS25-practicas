import React from 'react';
import Header from '../components/header';
import Menu from '../components/menu';
import Footer from '../components/footer';
import Seccion from '../components/seccion';

const secciones = [
  {
      nombre: 'Ficción',
      libros: [
        { titulo: '1984', autor: 'George Orwell', imagen: '#' },
        { titulo: 'El túnel', autor: 'Ernesto Sabato', imagen: '#' },
      ],
    },
    {
      nombre: 'Fantasía',
      libros: [
        { titulo: 'Harry Potter', autor: 'J.K. Rowling', imagen: '#' },
        { titulo: 'El nombre del viento', autor: 'Patrick Rothfuss', imagen: '#' },
      ],
    },
    {
      nombre: 'Ciencia',
      libros: [
        { titulo: 'Breves respuestas a las grandes preguntas', autor: 'Stephen Hawking', imagen: '#' },
      ],
    },
];

export default function Home() {
  return (
    <>
      <Header />
      <div className="container my-4">
        <div className="row">
          <aside className="col-md-3">
            <Menu />
          </aside>
          <main className="col-md-9">
            {secciones.map((seccion, i) => (
              <Seccion key={i} nombre={seccion.nombre} libros={seccion.libros} />
            ))}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
