import React, {useContext, useState} from 'react'

export const CartContext = React.createContext([])

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (obj) =>  { setCart([...cart, obj]) }

    const value = { cart, addToCart: addItem}

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext)

