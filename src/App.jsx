import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <h1></h1>
      <ItemListContainer productListTitle={'Lista de Productos'} />
    </>
  );
}

export default App;
