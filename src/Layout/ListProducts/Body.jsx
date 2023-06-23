import React, { useState } from 'react'
import "./ListProducts.scss"
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { Route ,Routes } from 'react-router-dom';
import YourCard from '../Card/YourCard';
import { showProduct } from '../../redux/product/action';


export default function Body() {
  const [quantity,setQuantity]=useState(1);
const dispatch=useDispatch();
  const {products}=useSelector(state=>state.productReducer)
  console.log(products);
  

  return <div>
   
    {products.map((product)=>{
    return <div>
<div className="row pt-3 bg-light">
    <div className="col-md-2">
      <div >
      <img className='item-1' src={product.image}></img>
      </div>
    </div>

    <div className="col-md-7 ms-4">
      <div className="row  note note-info">{product.productName}</div>
      <div className="row note note-info">{product.title}</div>
      
    </div>

    <div className="col-md-2 ms-1">
      <div className="row mb-2 pt-2">
      <input type="number" value={quantity} />
      </div>
      <div className="row bg-danger mt-5"> <button onClick={()=>
      dispatch(showProduct(product))
      
      }>{product.price}$</button> </div>
    </div>
    <hr className='text-info'></hr>

</div>





    </div>
    }
    )}

    </div>
}
