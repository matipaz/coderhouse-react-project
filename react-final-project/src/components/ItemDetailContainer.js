import {useState,useEffect} from 'react'
import ItemDetail    from './ItemDetail'
import {find,isEmpty} from 'lodash'
import itemsJson    from './items.json'
import SpinnerLoading from './SpinnerLoading'

const getItem = async(id) =>{

    const itemResult = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(find(itemsJson,(item)=>item.id == id.id ));}
                , 2000);})
    return itemResult
}

const ItemDetaiContainer = (id) =>{
    const [item, setState] = useState({});
    useEffect(() =>{ getItem(id)
        .then((resolve) => {setState(resolve); })}, [item])


    return  <>
                {isEmpty(item)? <SpinnerLoading/> : <ItemDetail item={item}/>}
            </>
            
}





export default ItemDetaiContainer
