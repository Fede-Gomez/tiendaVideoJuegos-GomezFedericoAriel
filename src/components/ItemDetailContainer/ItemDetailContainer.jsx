import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import datos from '../../assets/datosJuegos/productos';

const items = datos;
export default function ItemDetailContainer() {
  const [producto, setProducto] = useState([])
  const {id} = useParams();
useEffect(() => {
    new Promise ((resol)=>{
      setTimeout(() => {
        resol(items)
      }, 2000)
    }).then(data =>{
      // ver si es un item random
        let random = data.find(e => e.id == id);
        random.title.includes('random') 
        ?
          buscarProductoRandom(random.categoryId)
        :
          setProducto(random)
      }
    )
}, [id])

const buscarProductoRandom = (category)=>{
  let itemRandom = items.filter(e => e.categoryId == category)
  setProducto(itemRandom[getRandomInt(itemRandom.length-1)]);
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

    return (
        <>
            {producto && 
              <ItemDetail
                producto={producto}
              />}
        </>
  )
}
