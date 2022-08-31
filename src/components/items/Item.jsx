import React from 'react'
import {Link} from 'react-router-dom'
const CardItem = ({items}) => {
    const {id,title, price, description, urlPic, stock} = items;
    return (
        <>
            <div className='card text-center'>
                <h5 className="card-header">{title}</h5>
                <Link to={`/item/${id}`}>
                    <img className="card-img-top" src={urlPic} alt={title} height={250} style={{marginLeft:-50}}/>
                </Link>
                <div className="card-body">
                    <span>Precio: {price}</span>
                    <p>{description}</p>
                </div>
                <span>Stock disponible: {stock}</span>
                <Link to={`/item/${id}`}>
                <div class="card-footer text-muted">
                    <button>
                        Ver mas detalles
                    </button>
                </div>
                </Link>
            </div>
        </>
  )
}

export default CardItem