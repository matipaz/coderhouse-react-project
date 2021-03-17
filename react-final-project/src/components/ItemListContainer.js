import { useState,useEffect } from "react";
import Item   from './Item'
import itemsJson    from './items.json'
import SpinnerLoading from './SpinnerLoading'
import {map} from'lodash'
const ItemListContainer = () =>{
    const [items, setItems] = useState([]);

    useEffect(() => {
        new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(itemsJson);
        }, 2000);
        }).then((resultado) => setItems(resultado));
    });


    return(
        <>
            {items.length === 0 ? <SpinnerLoading/> : null}
            {map(items,(item,index) => <Item item={item} key={index} />)}
        </> 
    
    )
}

export default ItemListContainer;