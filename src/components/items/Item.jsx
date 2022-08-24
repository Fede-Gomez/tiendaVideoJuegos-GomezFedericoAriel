import React from 'react'
import ItemCount from './ItemCount'
const CardItem = ({title, price, description, urlPic, stock}) => {
    return (
        <>
            <div className='card' style={{flex: '1 1 33.33%'}} >
                <h5 className="card-title" style={{textAlign:'center'}}>{title}</h5>
                <img className="card-img-top" src={urlPic} alt={title} height={250} style={{marginLeft:0}}/>
                <div className="card-body">
                    <p className="card-text">{description}</p>
                    <span>Precio: {price}</span>
                </div>
                <ItemCount initial={1} stock={stock} onAdd={"aca se va a agregar al carrito!"}/>
            </div>
        </>
  )
}

export default CardItem