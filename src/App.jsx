import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { Layout } from './components/Layout';

function App() {
  return (
    <>
      <Layout>
        <ItemListContainer mensaje="Bienvenido a la tienda!!!"/>
      </Layout>
    </>
  );
}

export default App;
