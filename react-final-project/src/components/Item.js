import { useState } from "react";
import ItemCount from './ItemCount'


const Item = (item) =>{

    const [stockActual, setStockActual] = useState(item.item.stock);

    const restarStock = (e, nuevoStock) => {
        e.preventDefault();
        setStockActual((stockActual) => (stockActual - nuevoStock));
    };

    return(

        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{item.item.name}</h5>
                <p className="card-text">{item.item.price}</p>
                <ItemCount  stock={stockActual} initial={1} onAdd={restarStock}/> 
            </div>
        </div>
   )
}
      

export default Item