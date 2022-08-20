import React, { useState } from 'react'
import CardItem from './Item'
import datos from '../assets/datosJuegos/juegos'
const ItemList = () => {
const [data, setData] = useState([])
        setTimeout(() => {
          setData(datos)
        }, 2000)
  return (
    <>
      <div className='card-group'>
      {
          data.map(e=>(
            <>
              <CardItem
                key={e.id}
                description={e.desciption}
                price={e.price}
                title={e.title}
                urlPic={e.urlPic}
                stock={e.stock}
              />
            </>
          ))
      }
      </div>
    </>
  )
}

export default ItemList