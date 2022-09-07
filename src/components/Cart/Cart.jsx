import React, { useContext } from 'react'
import { useState } from 'react';
import { CartContext } from '../../context/CartContext'
import '../../styles/Cart.css';
import ItemListCart from '../ItemListCart/ItemListCart';

export default function Cart() {
  const {items} = useContext(CartContext)
  return (
    <>
      {
        items == 0 
        ?
          <div class="alert alert-info" role="alert" style={style.carrito}>
            <p>Agrega productos al carrito</p>
          </div>
        :
          <ItemListCart items={items} />
      }
    </>
  )
}

const style = {
  carrito:{
    marginTop: 50
  }
}