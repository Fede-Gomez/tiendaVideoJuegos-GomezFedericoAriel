import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

export default function ItemDetail({producto}) {
    const [count, setCount] = useState(0)
    const {addItem, items} = useContext(CartContext)
    const {id,price, title, stock, urlPic, description,categoryId,gender,consolas} = producto;
    const agregarItemCarrito = (cantidad)=>{
        setCount(cantidad);
        addItem(producto, cantidad);
    }
    const itemEnCarrito = items.filter(e => e.id === id)[0]

    return (
    <>
        <h2 style={{textAlign:'center', margin:'30px', color:'white'}}>Estas dentro de {categoryId}</h2>
        <div className='card text-center' style={style.card}>
            <h5 className="card-header">{title}</h5>
            <img className="card-img-top" src={urlPic} alt={title} height={250} style={{marginLeft:0}}/>
            <div className="card-body">
                <p className="card-text">{description}</p>
                {
                    categoryId === 'Videojuegos' && 
                        <>
                            <p>Plataformas: {consolas.map(platform =><b> {platform} </b>)}</p> 
                            <p>Genero: {gender}</p>
                        </>
                }
                <span>Precio: ${price}</span>
                {
                    count === 0 ?
                        <div style={{textAlign:'center'}}>
                            <ItemCount 
                            initial={1} 
                            stock={stock} 
                            onAdd={agregarItemCarrito}
                            inCart={itemEnCarrito}
                        />
                            <Link to={`/`}
                            >
                                <button 
                                    style={{width:'100%'}}
                                    type="button" 
                                    className='btn btn-primary'
                                >
                                    Volver a inicio
                                </button>
                            </Link>
                            <Link to={`/category/${categoryId}`}
                            >
                                <button 
                                    style={{width:'100%'}}
                                    type="button" 
                                    className='btn btn-secondary'
                                >
                                    Volver a la categoria
                                </button>
                            </Link>
                            </div>
                            :
                            <Link to={`/cart/`} >
                                <button 
                                    style={{width:'100%'}}
                                    type="button" 
                                    className='btn btn-success'
                                >
                                    Terminar Compra
                                </button>
                            </Link>
                }
            </div>
        </div>
    </>
  )
}

const style ={
    card:{
        margin: 'auto',
        width: '40%',
        marginTop: 30,
    }
}