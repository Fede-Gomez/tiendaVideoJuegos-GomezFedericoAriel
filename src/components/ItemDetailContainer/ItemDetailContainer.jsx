import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import datos from '../../assets/bd/productos';
import { PacmanLoader } from 'react-spinners';

const {product} = datos;
export default function ItemDetailContainer() {
  const [producto, setProducto] = useState([])
  const {id} = useParams();

  useEffect(() => {
    new Promise ((resol)=>{
      setTimeout(() => {
        resol(product)
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
  let itemRandom = product.filter(e => e.categoryId == category)
  setProducto(itemRandom[getRandomInt(itemRandom.length-1)]);
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

    return (
        <>
            {producto.length != 0 ?
              <ItemDetail
                producto={producto}
              />
              : <PacmanLoader color={'#4A90E2'} cssOverride={override} size={150}/>
            }
        </>
  )
}
const override = {
  margin: "0 auto",
  'marginTop': '80px',
};