import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="Bienvenido a la tienda!!!"/>
    </>
  );
}

export default App;
