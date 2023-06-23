import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "../../App.scss"
import { deleteShowProduct } from '../../redux/product/action';
import { useState } from 'react';
import { changeQuantity } from '../../redux/product/action';

export default function Body() {
  const dispatch=useDispatch();
  const [quantity1,setQuantity1]=useState({})

  


  const handleChangeQuantity=(value)=>{
const newQuantity={...quantity1,[value.target.id]:{[value.target.id]:Number(value.target.value),id:value.target.id}}
const newQuantity1=Object.values(newQuantity)
setQuantity1(newQuantity);
dispatch(changeQuantity(newQuantity1))

  }





  const {showProduct}=useSelector(state=>state.productReducer)
  const length1=showProduct.length;

  // useEffect(()=>
  // showProduct.forEach(element => {
  //   setQuantity1({...quantity1,[element.productId]:element.quantity})
  // })
  // ,[setQuantity1])


  const total=showProduct.reduce((e,val,ins)=>{
    return e+=Number(val.price)*Number(val.quantity)
  },0

  )

  return (
    <div>Body Your Card
      <div className="row">
        <div className="col-md-1">#</div>
        <div className="col-md-2">Name</div>
        <div className="col-md-1">Price</div>
        <div className="col-md-2">Quantity</div>
        <div className="col-md-2 ms-3">Sub</div>
        <div className="col-md-2">Action</div>
      </div>
{showProduct.map((product,ins)=>
      <div className="row border border-success mb-1 mt-1">
      <div className="col-md-1">{ins}</div>
      <div className="col-md-2">{product.productName}</div>
      <div className="col-md-1">{product.price}$</div>
      <div className="col-md-2"><input type="number" value={quantity1[product.productId]?quantity1[product.productId][0]:1} className='item-2' id={product.productId} 
      onChange={e=>handleChangeQuantity(e)}/></div>
      <div className="col-md-2 ms-3">{product.price*product.quantity}$</div>
      <div className="col-md-3">
        <div className="row">
        <div className="col-md-6 "><button className='bg-info text-white'>Confirm</button></div>
        <div className="col-md-6 "><button className='bg-danger text-white' onClick={()=>
        dispatch(deleteShowProduct(ins))
        
        }>Delete</button></div>
        </div>

      </div>
    </div>
)}
<div>
  <div className="row">
    <div className="col-md-6">There are {length1} item</div>
    <div className="col-md-6 text-danger">Total:{total}$</div>
  </div>
</div>






    </div>
  )
}
