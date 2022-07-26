import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar.jsx';
import CartProvider from './context/CartContext';
import startFirebase from './helpers/firebase/connect';

startFirebase();

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='/gender/:gender' element={<ItemListContainer />} />
            <Route path='/platform/:platform' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<Cart/>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
