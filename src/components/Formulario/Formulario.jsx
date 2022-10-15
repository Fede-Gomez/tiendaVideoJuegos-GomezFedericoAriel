import { addDoc, collection, doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

const Formulario = ({total, compra}) => {
    const {items, precioTotal} = useContext(CartContext)
    const [setOrderId] = useState('')
    const [formulario, setFormulario] = useState({
        buyer:{
            email:'',
            nombre:'',
            apellido:'',
            telefono:'',
        },
        total:total,
        items: compra,
    })
    const {buyer:{email,apellido,nombre,telefono},} = formulario;

    const date = new Date(); 

    const handleChange = e=>{
        const {name, value} = e.target;
        setFormulario({
            ...formulario,
            buyer:{
                ...formulario.buyer,
                [name]:value,
            },
        });
    }

    const sentOrder = (e)=>{
        e.preventDefault();
        const newOrder = {
            buyer:formulario.buyer,
            items:items,
            date : date,
            total: precioTotal()
        }
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders')
        addDoc(ordersCollection, newOrder).then(({id})=> setOrderId(id))
        updateStock()
        alert('Compra exitosa!!')
    }

    const updateStock = () =>{
        const db = getFirestore();
        items.forEach( item =>{
            getDoc(doc(db, 'items', item.id)).then( snapshot =>{
                const newStock = doc(db, 'items', item.id);
                updateDoc(newStock, {stock: snapshot.data().stock - item.count})
            })
        })
    }

  return (
    <form onSubmit={sentOrder} className='container border'>
        <div className='mb-3'>
            <input
                type='text'
                name='nombre'
                value={nombre}
                onChange={handleChange}
                placeholder={'Ingrese nombre'}
            />
        </div>
        <div className='mb-3'>
            <input
                type='text'
                name='apellido'
                value={apellido}
                onChange={handleChange}
                placeholder={'Ingrese apellido'}
            />
        </div>
        <div className='mb-3'>
            <input
                type='text'
                name='telefono'
                value={telefono}
                onChange={handleChange}
                placeholder={'Ingrese telefono'}
            />
        </div>
        <div className='mb-3'>
            <input
                type='text'
                name='email'
                value={email}
                onChange={handleChange}
                placeholder={'ej: ejemplo@gmail.com'}
            />
        </div>
        <button type='submit'>
            Comprar
        </button>
    </form>
  )
}

export default Formulario