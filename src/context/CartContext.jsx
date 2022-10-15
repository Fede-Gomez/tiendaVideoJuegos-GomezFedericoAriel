import React, { useState, createContext } from 'react'

export const CartContext = createContext()

export default function CartProvider({children}) {
    const [items, setItems] = useState([])
    const [continuarCompra, setContinuarCompra] = useState(false)
    const precioTotal = ()=> {
        let total = 0;
        items.forEach(item => { total += item.price*item.count });
        return total;
    }

    const addItem =  (producto, count) => {
        if(isInCart(producto.id)){
            aumentarCantidad(producto, count)
        }
        else{
            setItems([...items,{...producto, count}])
        }
    }
    const removeItem =  (itemId) => {
        setItems(items.filter(e => e.id !== itemId))
    }
    const clear =  () => {
        setItems([]);
        setContinuarCompra(false);
    }
    const isInCart =  (nuevoItemId) => {
        const encontrado = items.find(e => e.id === nuevoItemId)
        if(encontrado !== undefined)
            return true;
        return false;
    }
    const aumentarCantidad = (producto, count)=>{
            let aux = items;
            let itemIndex = aux.findIndex(e => e.id === producto.id)
            aux[itemIndex].count += count
            setItems([...aux])
    }
    return(
        <CartContext.Provider value={{
            addItem,
            removeItem,
            clear,
            items,
            precioTotal,
            continuarCompra,
            setContinuarCompra
        }}>
            {children}
        </CartContext.Provider>
    )
}
