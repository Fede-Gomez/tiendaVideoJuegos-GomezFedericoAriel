import React,{ useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import datos from '../../assets/datosJuegos/productos'
import '../../styles/ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { PacmanLoader } from 'react-spinners';
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
        <h2 style={{textAlign:'center', margin:'30px'}}>Productos de: {category}</h2>
        <div className='cardList'>
          {productos.length != 0 ?
              <ItemList 
                items={productos}
              />
              : 
              <PacmanLoader color={'#4A90E2'} cssOverride={override} size={150}/>
            }
        </div>
    </>
  )
}


const override = {
  margin: "0 auto",
  'marginTop': '80px',
};