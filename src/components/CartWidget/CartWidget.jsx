import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import carritoVacio from '../../assets/carrito/carritoVacio.png'
import carritoLleno from '../../assets/carrito/carritoLleno.png'

export const CartWidget = () => {
  const {items} = useContext(CartContext)
  return (
    <>
      {items == 0
      ?
        <img className='imgCarrito'
          src={carritoVacio}
          height='50'
        />
      :
        <img className='imgCarrito'
            src={carritoLleno}
            height='50'
        />
      }
    </>
  )
}
