
const Item = (item) =>{
    return(

        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{item.item.name}</h5>
                <p className="card-text">{item.item.price}</p>
            </div>
        </div>
   )
}
      

export default Item