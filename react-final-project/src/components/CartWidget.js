import {useCartContext} from '../context/cartContext'
import {isEmpty} from 'lodash'
 const CartdWidget = ()=>{
    const {cart,totalItems} = useCartContext()


return <a href="#" className="nav-link fa fa-shopping-cart" hidden={isEmpty(cart)} >
<span class="badge badge-pill badge-info">{totalItems}</span>
</a>}

export default CartdWidget

