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
      let encontrado = snapshot.docs.find(a => a.id === id);
      setProducto([{...encontrado.data(),id}]);
    })
}, [id])

    return (
        <>
            {producto.length !== 0 ?
              <ItemDetail
                key={id}
                producto={producto[0]}
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