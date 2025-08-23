import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Menu from '../components/menu';
import Footer from '../components/footer';
import Seccion from '../components/seccion';

const Home = () => {
  const [secciones, setSecciones] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/books')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setSecciones([
          {
            nombre: 'Todos',
            libros: data.books.map(({ id, title, author, price, createdAt }) => ({
              id: id,
              titulo: title,
              autor: author,
              imagen: '#',
              precio: price,
              fechaCreacion: createdAt,
            })),
          },
        ]);
      })
      .catch(console.error);
  }, []);

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
