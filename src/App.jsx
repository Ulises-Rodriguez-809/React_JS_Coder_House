import './App.css';
import { Layout } from './components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Consolas } from './pages/Consolas';
import { ConsolaDetalle } from './pages/ConsolaDetalle';
import { Figuras } from './pages/Figuras';
import { Juegos } from './pages/Juegos';
import { JuegosDetalles } from './pages/JuegosDetalles';
import { ContextWrapper } from './context/Context';
import { DetalleProducto } from './pages/DetalleProducto';


//as
function App() {
  return (
    <>
      <ContextWrapper>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/' element={<Home url={'./t10Productos/t10P.json'} />} />
              <Route path='/:id' element={<DetalleProducto url={'/t10Productos/t10P.json'} />} />
              <Route path='/figuras' element={<Figuras />} />
              <Route path='/figuras/:id' element={<DetalleProducto url={'/figuras/figuras.json'} />} />
              <Route path='/consolas' element={<Consolas url={'./consolas/consolas.json'} />} />
              {/* el : es para las url dinamicas --> el nombre q le asignes despues de los : es el nombre q va a tomar como variable esa url q estamos pasando por la url*/}
              <Route path='/consolas/:id' element={<ConsolaDetalle />} />
              <Route path='/consolas/:id/:consola' element={<DetalleProducto url={'/consolas/consolas.json'} />} />
              <Route path='/juegos' element={<Juegos url={'./juegos/juegos.json'} />} />
              <Route path='/juegos/:id' element={<JuegosDetalles />} />
              <Route path='/juegos/:id/:juego' element={<DetalleProducto url={'/juegos/juegos.json'} />} />
              <Route path='*' element={<h1>Error la ruta ingresada no es correcta</h1>} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ContextWrapper>
    </>
  );
}

export default App;
