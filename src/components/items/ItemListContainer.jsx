import React,{ useEffect, useState } from 'react'
import datos from '../../assets/datosJuegos/juegos'
import '../../styles/ItemListContainer.css'
import ItemList from './ItemList'
export const ItemListContainer = () => {

const [productos, setProductos] = useState([])


useEffect(() => {
  const bd = datos;
  new Promise ((resol)=>{
    setTimeout(() => {
      resol(bd)
    }, 2000)
  }).then(data =>{
    setProductos(data);
  })
},[])


  return (
    <>
        <div className='cardList' style={{ItemListContainer}}>
          {productos && <ItemList items={productos}/>}
        </div>
    </>
  )
}


