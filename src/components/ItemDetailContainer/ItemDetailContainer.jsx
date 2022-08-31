import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import datos from '../../assets/datosJuegos/productos';


export default function ItemDetailContainer() {
  const [producto, setProducto] = useState([])
  const {id} = useParams();

useEffect(() => {
    const juego = datos;
    new Promise ((resol)=>{
      setTimeout(() => {
        resol(juego)
      }, 2000)
    }).then(data =>{
        setProducto(data.find(e => e.id == id));
      }
    )
}, [id])

    return (
        <>
            {producto && 
              <ItemDetail
                producto={producto}
              />}
        </>
  )
}
