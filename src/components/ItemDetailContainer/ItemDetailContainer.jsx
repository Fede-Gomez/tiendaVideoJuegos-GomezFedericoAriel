import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';
import {
  collection,
  getDocs,
  getFirestore,
} from 'firebase/firestore'


export default function ItemDetailContainer() {
  const [producto, setProducto] = useState([])
  const {id} = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, 'items');
    getDocs(itemCollection).then(snapshot =>{
      let encontrado = snapshot.docs.find(a => a.id == id);
      encontrado.data().title.includes('random')
    ? buscarProductoRandom(snapshot.docs, encontrado.data().categoryId)
    : setProducto(encontrado.data())
    })
}, [id])

const buscarProductoRandom = (arrayItems, random)=>{
  const itemRandom = arrayItems.filter( id => id.data().categoryId == 'Videojuegos' )
  setProducto(itemRandom[getRandomInt(itemRandom.length-1)].data());
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

    return (
        <>
            {producto.length != 0 ?
              <ItemDetail
                key={1}
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