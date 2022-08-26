import React, { useState } from 'react'
import CardItem from './Item'

const ItemList = ({items}) => {

  return (
    <>
      <div className='card-group'>
      {
        items.map(e=>(
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