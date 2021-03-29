import { useState,useRef } from "react";
import {NavLink} from 'react-router-dom'
import ItemCount from './ItemCount'


const ItemDetail = ({item}) =>{

    const [stockActual, setStockActual] = useState(item.stock);
    const btnFinish = useRef(null)

    const restarStock = (e, nuevoStock) => {
        e.preventDefault();
        setStockActual((stockActual) => (stockActual - nuevoStock));
        if(btnFinish.current.hidden)
            btnFinish.current.hidden = false
    };

    return <div className="card">
                <img  src={require(`${item.image.src}`).default} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.price}</p>
                    <ItemCount  stock={stockActual} initial={1} onAdd={restarStock}/> 
                    <NavLink ref={btnFinish} className="btn btn-lg btn-primary" to="/cart" hidden>Terminar la compra</NavLink>
                </div>    
            </div>   

}
    



export default ItemDetail