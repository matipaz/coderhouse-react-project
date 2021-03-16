import { useState } from "react";
import ItemCount from './ItemCount'

const ItemListContainer = ({greeting}) =>{
    const [stockActual, setStockActual] = useState(5);
    const restarStock = (e, nuevoStock) => {
      e.preventDefault();
      setStockActual((stockActual) => (stockActual - nuevoStock));
    };
    return(
    <> 
        <h1 className="display-3">{greeting}</h1>
        <ItemCount  stock={stockActual} initial={1} onAdd={restarStock}/> 
    </>)
}

export default ItemListContainer;