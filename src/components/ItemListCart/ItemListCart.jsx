import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export default function ItemListCart({items}) {
    const {removeItem, clear, setContinuarCompra} = useContext(CartContext)
    const eliminarItem = (id)=>{
        removeItem(id)
    }
    const ingresarDatos = ()=>{
      setContinuarCompra(true)
    }
    return (
        <>
          <section className='row' style={style.listado}>
          {
            items.map(e=>(
              <>
                <div className='col-sm-4'>
                {
                    <div className="card text-center">
                        <img className="card-img-top" src={e.urlPic} alt={e.title} height={250} style={{marginLeft:0}}/>
                        <div className="card-body">
                            <p className="card-text">Nombre: {e.title}</p>
                            <p className="card-text">Cantidad: {e.count}</p>
                            <button
                                type="button" 
                                className="btn btn-outline-warning"
                                onClick={()=>eliminarItem(e.id)}
                            >
                                Quitar
                            </button>
                        </div>
                    </div>
                }
                </div>
              </>
            ))
          }
          </section>
          <div className='col-sm-4'
            style={{marginLeft:'20%', marginTop:'50px'}}
          >
            <button
                style={{marginRight:"20px"}}
                type="button" 
                className="btn btn-outline-danger"
                onClick={clear}
            >
                Quitar todos
            </button>
            <button

                type="button" 
                className="btn btn-outline-success"
                onClick={ingresarDatos}
            >
                Continuar la compra
            </button>
          </div>
        </>
      )
}

const style = {
  listado:{
    marginRight:20,
    marginLeft:20,
    marginTop: 50,
  }
}