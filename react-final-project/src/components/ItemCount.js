import { useState, useRef } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCountActual] = useState(0);
  const onChangeCount = (e) => {
    e.preventDefault();
    const stockPreview = stock - e.target.value
    
    if(stockPreview<0)
        inputCount.current.disabled = true
    else
      inputCount.current.disabled = false


      setCountActual(e.target.value); 
    
  };

  const inputCount = useRef(null)


  return (
    <form>
      Stock: {stock}
      <br />
      <input  onChange ={(e) => onChangeCount(e)} type="number" placeholder={initial} min="0" step="1"></input>
      <br />
      <button ref={inputCount} className="btn btn-lg btn-primary" onClick={(e) => onAdd(e, count)}>Agregar al carrito</button>
    </form>
  );
};

export default ItemCount;
