import React from 'react';
import Header from '../components/header';
import Menu from '../components/menu';
import Footer from '../components/footer';
import Seccion from '../components/seccion';

const Home = () => {
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

  return (
    <div id="contenedor">
      <Header />
      <Menu />
      {secciones.map((seccion, i) => (
        <Seccion key={i} nombre={seccion.nombre} libros={seccion.libros} />
      ))}
      <Footer />
    </div>
  );
};

export default Home;

