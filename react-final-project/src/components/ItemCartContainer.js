import {map} from 'lodash'
import ItemCart from './ItemCart' 
import {useCartContext} from '../context/cartContext'

const ItemCartContainer = ({itemsCart})=>{
    const {totalPrice} = useCartContext()

    return    <div className="container mt-5 mb-5">
        <div className="d-flex justify-content-center row">
            <div className="col-md-8">
                <div className="p-2">
                    <h4>Shopping cart</h4>
                    <div className="d-flex flex-row align-items-center pull-right"><span className="mr-1">Sort by:</span><span className="mr-1 font-weight-bold">Price</span><i className="fa fa-angle-down"></i></div>
                </div>
                {map(itemsCart,(item,index) => <ItemCart item={item} key={index} />)}

                <div className="p-2">
                <h4>Total ${totalPrice}</h4>

                </div>

                <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded"><button className="btn btn-warning btn-block btn-lg ml-2 pay-button" type="button">Proceed to Pay</button></div>
            </div>
        </div>
    </div>
}

export default ItemCartContainer    