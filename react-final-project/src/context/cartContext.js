import React, {useContext, useState} from 'react'
import {remove,find,map,sum, isEmpty}from 'lodash'
export const CartContext = React.createContext([])

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)

    const getItem = (id) => find(cart,(item) => item.id == id)

    const addItem = (obj) =>  { 
        setCart([...cart, obj]);
        updatePriceAndTotalItems();
    }

    const deleteItem = (id) =>  { 
        setCart(remove(({item}) => item.id == id));
        updatePriceAndTotalItems();
    }
    
    const updatePriceAndTotalItems = () => {
        
        const sumPrice = sum( map(cart,(item)=>item.price * item.quantity))
        const sumQuantityItems = sum(map(cart,(item)=>item.quantity))

        setTotalItems(sumQuantityItems)
        setTotalPrice(sumPrice)
     }

    const updateItem = (id, quantity) =>{
        const item = getItem(id);

        item.quantity = quantity>0? item.quantity + 1 : item.quantity - 1
        setCart([...cart])

        updatePriceAndTotalItems();
    }
    const value = { cart, addToCart: addItem, deletItemToCart: deleteItem, updateItemToCart:updateItem, totalPrice,totalItems}

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext)

