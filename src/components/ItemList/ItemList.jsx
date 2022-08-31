import React from 'react'
import CardItem from '../items/Item'

const ItemList = ({items}) => {
  return (
    <>
      <div className='row'>
      {
        items.map(e=>(
          <>
            <div className='col-sm-4'>
              {items && <CardItem key={e.id} items={e}/>}
            </div>
          </>
        ))
      }
      </div>
    </>
  )
}

export default ItemList