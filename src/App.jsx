import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { Layout } from './components/Layout';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';


function App() {
  return (
    <>
      <BrowserRouter>
      <Layout>
        {/* el item ItemListContainer tiene q contener los productos de la pagina principal osea el home 
        
        o tiene q tener el contenido de los productos de la pagina q hayas clikeado --> capturalo con useParms


        FIJATE LA CLASE 10 Q MOSTRARON EL REPO DE UN PIBE Y PODES ORIENTARTE DE AHI
        */}
        {/* <ItemListContainer mensaje="Bienvenido a la tienda!!!"/> */}
        <Routes>
          {/* esto hacelo con el map y routes.js */}
          {/* <Route path='/' element={<ItemListContainer></ItemListContainer>} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/revistas' element={<h1>revistas</h1>} />
          <Route path='/figuras' element={<h1>figuras</h1>} />
          <Route path='/consolasretro/:playstation' element={<h1>ps</h1>} />
          <Route path='/consolasretro/:xbox' element={<h1>xb</h1>} />
          <Route path='/consolasretro/:nintendo' element={<h1>nin</h1>} />
        </Routes>
      </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
