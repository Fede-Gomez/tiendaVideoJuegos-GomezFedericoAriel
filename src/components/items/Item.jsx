import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
const CardItem = ({id,title, price, description, urlPic, stock}) => {
    return (
        <>
            <div className='card' style={{flex: '1 1 33.33%'}} >
                <h5 className="card-title" style={{textAlign:'center'}}>{title}</h5>
                <Link to={`/item/${id}`}>
                    <img className="card-img-top" src={urlPic} alt={title} height={250} style={{marginLeft:0}}/>
                </Link>
                <div className="card-body">
                    <span>Precio: {price}</span>
                </div>
                <ItemCount initial={1} stock={stock} onAdd={"aca se va a agregar al carrito!"}/>
            </div>
        </>
  )
}

export default CardItem