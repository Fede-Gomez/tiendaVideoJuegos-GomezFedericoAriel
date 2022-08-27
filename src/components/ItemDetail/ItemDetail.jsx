import React from 'react'

export default function ItemDetail({title, description, price, urlPic}) {
    console.log(description);
    return (
    <>
    <div className='card' style={{flex: '1 1 33.33%'}} >
        <h5 className="card-title" style={{textAlign:'center'}}>{title}</h5>
        <img className="card-img-top" src={urlPic} alt={title} height={250} style={{marginLeft:0}}/>
        <div className="card-body">
            <p className="card-text">{description}</p>
            <span>Precio: {price}</span>
        </div>
    </div>
</>
  )
}
