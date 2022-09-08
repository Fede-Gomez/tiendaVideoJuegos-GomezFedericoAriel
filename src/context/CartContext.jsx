import React, { createContext } from 'react'
import { useState } from 'react';

export const CartContext = createContext()

export default function CartProvider({children}) {
    const [items, setItems] = useState([])

    const addItem =  (producto, count) => {
        if(isInCart(producto.id)){
            aumentarCantidad(producto, count)
        }
        else{
            setItems([...items,{...producto, count}])
        }
    }
    const removeItem =  (itemId) => {
        setItems(items.filter(e => e.id != itemId))
    }
    const clear =  () => {
        setItems([]);
    }
    const isInCart =  (nuevoItemId) => {
        const encontrado = items.find(e => e.id == nuevoItemId)
        if(encontrado != undefined)
            return true;
        return false;
    }
    const aumentarCantidad = (producto, count)=>{
            let aux = items;
            let itemIndex = aux.findIndex(e => e.id == producto.id)
            aux[itemIndex].count += count
            setItems([...aux])
    }
    return(
        <CartContext.Provider value={{
            addItem,
            removeItem,
            clear,
            items
        }}>
            {children}
        </CartContext.Provider>
    )
}
