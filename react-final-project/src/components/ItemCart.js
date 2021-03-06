import {useCartContext} from '../context/cartContext'


const ItemCart = ({item}) => {
    const {deletItemToCart,updateItemToCart} = useCartContext()

    return (
        <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
        <div className="mr-1"><img className="rounded" src={require(`${item.image.src}`).default} width="70"></img></div>
        <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">{item.name}</span>
        </div>
        <div className="d-flex flex-row align-items-center qty">
        <button className="btn btn-link fa fa-minus text-danger" onClick={(e) => updateItemToCart(item.id, -1)}></button>
            <h5 className="text-grey mt-1 mr-1 ml-1">{item.quantity}</h5>
            <button className="btn btn-link fa fa-plus text-success" onClick={(e) => updateItemToCart(item.id, 1)}></button>
        </div>
        <div>
            <h5 className="text-grey"> ${item.price * item.quantity}</h5>
        </div>
        <div className="d-flex align-items-center">
        <button className="btn btn-link fa fa-trash mb-1 text-danger" onClick={(e) => deletItemToCart(item.id)}></button>
        </div>
    
    </div>
)
}
export default ItemCart