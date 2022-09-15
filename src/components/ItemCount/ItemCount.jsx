import React, { useState } from 'react'

const ItemCount = ({stock,initial,onAdd}) => {
    const [count, setCount] = useState(initial)

    const countUp = ()=>{
        stock > count ? setCount(count + 1) : alert("Agregaste lo maximo posible")
    }
    const countDown = (e)=>{
        count !== 0  ? setCount(count - 1) : alert("No hay mas stock")
    }
    const Add = ()=>{
        count === 0 ? alert('Agrege un 1 aunque sea al carrito') : onAdd(count)
    }
    return (
    <>
        <div style={{textAlign:'center'}}>
            <button 
                style={{float:'left', width:'30%'}}
                type='button' 
                className='btn btn-danger'
                onClick={countDown}
            >
                -
            </button>
            <span style={{fontSize:'25px', color:'black'}}>{count}</span>
            <button 
                style={{float:'right', width:'30%'}}
                type='button' 
                className='btn btn-primary'
                onClick={countUp}
            >
                +
            </button>
        </div>
        <div style={{textAlign:'center'}}>
            <button 
                style={{width:'100%'}}
                type="button" 
                className='btn btn-dark'
                onClick={Add}
            >
                Agregar
            </button>
        </div>
        <span>Hay {stock-count} disponible</span>
        
    </>
  )
}

export default ItemCount
