import './App.css';
import { Layout } from './components/Layout';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Consolas } from './pages/Consolas';
import { ConsolaDetalle } from './pages/ConsolaDetalle';
import { Figuras } from './pages/Figuras';
import { Juegos } from './pages/Juegos';
import { JuegosDetalles } from './pages/JuegosDetalles';

function App() {
  return (
    <>
      <BrowserRouter>
      <Layout>
        <Routes>
          {/* esto hacelo con el map y routes.js */}
          <Route path='/' element={<Home />} />
          <Route path='/figuras' element={<Figuras />} />
          <Route path='/consolas' element={<Consolas url={'./consolas/consolas.json'} />} />
          {/* el : es para las url dinamicas --> el nombre q le asignes despues de los : es el nombre q va a tomar como variable esa url q estamos pasando por la url*/}
          <Route path='/consolas/:id' element={<ConsolaDetalle />} />
          <Route path='/juegos' element={<Juegos url={'./juegos/juegos.json'} />} />
          <Route path='/juegos/:id' element={<JuegosDetalles />} />
          <Route path='*' element={<h1>Error la ruta ingresada no es correcta</h1>} />
          {/* Navigate te permite redireccionar a otras rutas tenes q importarlo*/}
          {/* <Route path='*' element={<Navigate to='/' />} /> */}
        </Routes>
      </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
