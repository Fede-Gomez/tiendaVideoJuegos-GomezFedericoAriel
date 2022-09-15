import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'
import '../../styles/Cart.css';
import ItemListCart from '../ItemListCart/ItemListCart';

export default function Cart() {
  const {items} = useContext(CartContext)
  return (
    <>
      {
        items.length === 0 
        ?
        (
          <>
            <Link to={'/'}>
              <button className="alert alert-info" role="alert" style={style.carrito}>
                Agrega productos al carrito
              </button>
            </Link>
          </>
        )
        :
          <ItemListCart items={items} />
      }
    </>
  )
}

const style = {
  carrito:{
    marginTop: 50
  },
}