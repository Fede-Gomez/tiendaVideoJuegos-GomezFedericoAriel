import './App.css';
import { ItemListContainer } from './components/items/ItemListContainer.jsx';
import { NavBar } from './components/NavBar/NavBar.jsx';

function App() {
  return (
    <>
      <NavBar/>
        <h2 style={{textAlign:'center'}}>Ofertas imperdibles</h2>
      <ItemListContainer />
    </>
  );
}

export default App;
