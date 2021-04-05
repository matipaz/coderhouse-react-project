
import {useCartContext} from '../context/cartContext'
import ItemCartContainer from './ItemCartContainer'

import {isEmpty} from 'lodash'

const Cart = ()=>{
    const {cart} = useCartContext()

    return<>
    {isEmpty(cart)? <h1>No hay productos en el carrito es el carrito!!!</h1>:<ItemCartContainer itemsCart={cart} />}
    </>
}
export default Cart


