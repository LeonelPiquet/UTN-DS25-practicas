import React from 'react';
import Header from '../components/header';
import Menu from '../components/menu';
import Footer from '../components/footer';
import Seccion from '../components/seccion';

const Home = () => {
  const [secciones, setSecciones] = useState([]);
   
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/api/books');
      const data = await response.json();
      setSecciones(data);
    };
    fetchData();
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

