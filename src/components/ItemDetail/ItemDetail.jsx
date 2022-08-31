import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

export default function ItemDetail({producto}) {
    const {price, title, stock, urlPic, description} = producto;
    return (
    <>
        {producto &&
            <div className='card text-center' style={{width:'20rem', marginLeft:'40%'}}>
                <h5 className="card-header">{title}</h5>
                <img className="card-img-top" src={urlPic} alt={title} height={250} style={{marginLeft:0}}/>
                <div className="card-body">
                    <p className="card-text">{description}</p>
                    <span>Precio: {price}</span>
                    <ItemCount initial={0} stock={stock} onAdd={"aca se va a agregar al carrito!"}/>
                </div>
            </div>
        }
    </>
  )
}
