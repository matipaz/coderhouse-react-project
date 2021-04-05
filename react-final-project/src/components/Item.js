import {NavLink} from 'react-router-dom'

const Item = ({item}) =>{
    return(

        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.price}</p>
                <NavLink className="btn-primary" to={`/product/${item.id}`}>VER MAS</NavLink>
            </div>
        </div>
   )
}
      

export default Item