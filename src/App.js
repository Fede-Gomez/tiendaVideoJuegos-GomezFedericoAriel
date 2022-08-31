import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
          <h2 style={{textAlign:'center'}}>Todos los productos !!!</h2>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:category' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
