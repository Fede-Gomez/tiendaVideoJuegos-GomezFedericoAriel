import React from 'react'
import {Link} from 'react-router-dom'

const CardItem = ({items}) => {
    const {id,title, price, description, urlPic} = items;
    return (
        <>
            <div className='card text-center'>
                <h5 className="card-header">{title}</h5>
                <Link key={`img${id}`} to={`/item/${id}`}>
                    <img className="card-img-top" src={urlPic} alt={title} height={250}/>
                </Link>
                <div className="card-body">
                    <span>Precio: ${price}</span>
                    <p>{description}</p>
                </div>
                <Link key={`detalle${id}`} to={`/item/${id}`}>
                <div className="card-footer text-muted">
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