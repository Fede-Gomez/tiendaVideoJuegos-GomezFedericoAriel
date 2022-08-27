import carrito from '../../assets/carrito/carrito.png'
export const CartWidget = ({cantidad}) => {
  return (
    <>
        <img
            className='rounded mx-auto d-block'
            src={carrito}
            height='50'
        />
        <p className='cantidadCarrito'>{cantidad}</p>
    </>
  )
}
