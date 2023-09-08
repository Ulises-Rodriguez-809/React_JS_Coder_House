import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBarBootstrap } from './components/NavBarBootstrap';

function App() {
  return (
    <>
      <NavBarBootstrap />
      <ItemListContainer mensaje="Bienvenido a la tienda!!!"/>
    </>
  );
}

export default App;
