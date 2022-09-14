import React,{ useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../../styles/ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { PacmanLoader } from 'react-spinners';
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore'


export const ItemListContainer = () => {

const [productos, setProductos] = useState([])
const { category, platform, gender } = useParams();

useEffect(() => {
  const db = getFirestore();
  if(category != undefined){
    let q = query(collection(db,"items"), where('categoryId','==',category));
    getDocs(q).then(snapshot =>{
      setProductos(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
    })
    return;
  }
  if(platform != undefined){
    let q = query(collection(db,"items"),
    where('categoryId','==','Videojuegos'),
    where('consolas','array-contains',platform))
    getDocs(q).then(snapshot =>{
      setProductos(snapshot.docs.map(doc => (
        {id: doc.id, ...doc.data()}
        )))
    })
    return
  }
  if(gender != undefined){
    let q = query(collection(db,"items"),
    where('gender','==',gender))
    getDocs(q).then(snapshot =>{
      setProductos(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
    })
    return
  }
  const itemCollection = collection(db, 'items');
  getDocs(itemCollection).then(snapshot =>{
    setProductos(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    )
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