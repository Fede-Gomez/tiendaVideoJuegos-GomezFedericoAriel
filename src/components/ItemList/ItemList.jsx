import React from 'react'
import CardItem from '../items/Item'

const ItemList = ({items}) => {

  return (
    <>
      <div className='card-group'>
      {
        items.map(e=>(
          <>
            <CardItem
              key={e.id}
              id={e.id}
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