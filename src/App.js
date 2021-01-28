import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  // definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {

    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=nz&category=${categoria}&apiKey=06009906b5724f17a480c7223c1771ca`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();

  }, [categoria]);

  return (
    <Fragment>
      <Header
        titulo='News Seeker'
      />

      <div className='container white'>
        <Formulario
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
