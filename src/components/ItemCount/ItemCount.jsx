import React, { useState } from 'react'

const ItemCount = ({stock,initial,onAdd, inCart}) => {
    const [count, setCount] = useState(initial)
    let carrito;
    if(inCart === undefined){
        carrito = 0
    }
    else{
        carrito = inCart.count
    }
    const countUp = ()=>{
        stock > count && count + carrito < stock ? setCount(count + 1) : alert("Agregaste lo maximo posible")
    }
    const countDown = (e)=>{
        count !== 0  ? setCount(count - 1) : alert("No hay mas stock")
    }
    const Add = ()=>{
        count !== 0 && count + carrito > stock ? alert('No es posible carrito') : onAdd(count)
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
    </>
  )
}

export default ItemCount
