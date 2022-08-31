import React,{ useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import datos from '../../assets/datosJuegos/productos'
import '../../styles/ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
export const ItemListContainer = () => {

const [productos, setProductos] = useState([])

const { category } = useParams();

useEffect(() => {
  const bd = datos;
  new Promise ((resol)=>{
    setTimeout(() => {
      resol(bd)
    }, 2000)
  }).then(data =>{
    category != undefined ? setProductos( data.filter( e => e.categoryId == category)) : setProductos(data)
  })
},[category])

  return (
    <>
        <div className='cardList'>
          {productos && <ItemList items={productos}/>}
        </div>
    </>
  )
}


