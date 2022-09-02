import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

export default function ItemDetail({producto}) {
    const {price, title, stock, urlPic, description, categoryId} = producto;
    const [agregarItem, setAgregarItem] = useState(0)
    const agregarItemCarrito = (count)=>{
        setAgregarItem(count)
    }
    return (
    <>
        {producto &&
            <div className='card text-center' style={{width:'20rem', marginLeft:'40%'}}>
                <h5 className="card-header">{title}</h5>
                <img className="card-img-top" src={urlPic} alt={title} height={250} style={{marginLeft:0}}/>
                <div className="card-body">
                    <p className="card-text">{description}</p>
                    <span>Precio: {price}</span>
                    {
                        agregarItem == 0 ?
                            <ItemCount 
                                initial={0} 
                                stock={stock} 
                                onAdd={agregarItemCarrito}
                            />
                            :
                            <div style={{textAlign:'center'}}>
                                <Link to={`/`}>
                                    <button 
                                        style={{width:'100%'}}
                                        type="button" 
                                        className='btn btn-primary'
                                    >
                                        Volver a inicio
                                    </button>
                                </Link>
                                <Link to={`/category/${categoryId}`}>
                                    <button 
                                        style={{width:'100%'}}
                                        type="button" 
                                        className='btn btn-secondary'
                                    >
                                        Volver a la categoria
                                    </button>
                                </Link>
                                <Link to={`/cart/`}>
                                    <button 
                                        style={{width:'100%'}}
                                        type="button" 
                                        className='btn btn-success'
                                    >
                                        Terminar Compra
                                    </button>
                                </Link>
                            </div>
                    }
                    
                </div>
            </div>
        }
    </>
  )
}
