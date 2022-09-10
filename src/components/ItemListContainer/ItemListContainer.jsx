import React,{ useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import datos from '../../assets/bd/productos'
import '../../styles/ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { PacmanLoader } from 'react-spinners';
export const ItemListContainer = () => {

const [productos, setProductos] = useState([])
const { category, platform, gender } = useParams();

useEffect(() => {
  const {product} = datos;
  new Promise ((resol)=>{
    setTimeout(() => {
      resol(product)
    }, 2000)
  }).then(data =>{
    // Lo que hacen estos elseIf es filtrar por la categoria de videojuegos que eligio el usuario... 
    // ya sea si filtro algo por plataforma o filtro algo de un genero o filtro algo de una categoria
    // en el caso que haya puesto otra cosa que no sea videojuegos muestra -> todos los productos
    if(category != undefined)
      setProductos( data.filter( e => e.categoryId == category))
    else if(platform != undefined)
      setProductos(data.filter( e =>  e.categoryId == 'Videojuegos').filter(a => a.consolas.includes(platform)));
    else if(gender != undefined){
      setProductos(data.filter( e =>  e.categoryId == 'Videojuegos').filter(a => a.gender.includes(gender)));
    }
    else {
      setProductos(data)
    }
  })
},[category,platform,gender])

  return (
    <>
        {

        (category || gender || platform)
          ? 
            <h2 style={{textAlign:'center', margin:'30px', color:'white'}}>
              Productos de: {category || gender || platform}
            </h2>
          :
            <h2 style={{textAlign:'center', margin:'30px', color:'white'}}>
              Todos los Productos
            </h2>
        }
        
        
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