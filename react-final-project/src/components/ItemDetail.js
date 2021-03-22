

const ItemDetail = ({item}) => 
    <div className="card">
         <img  src={require(`${item.image.src}`).default} alt="Card image cap"></img>
        <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.price}</p>
        </div>  
    </div>   



export default ItemDetail