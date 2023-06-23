import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SELECT_PRODUCT,
  UPDATE_PRODUCT,
  SHOW_PRODUCT,
  DELETE_SHOW_PRODUCT,
  CHANGE_QUANTITY
} from "./constant";

const initialState = {
  products:[
  {
    productId: "P001",
    productName: "Pizza",
    image: "images/pizza.jpg",
    title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
    price: 12,
    quantity: 1,
  },
  {
    productId: "P002",
    productName: "Hamburger",
    image: "images/Hamburger.jpg",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
    price: 16,
    quantity: 1,
  },
  {
    productId: "P003",
    productName: "Bread",
    image: "images/bread.jpg",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
    price: 13,
    quantity: 1,
  },
  {
    productId: "P004",
    productName: "Cake",
    image: "images/Cake.jpg",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
    price: 14,
    quantity: 1,
  },],
  showProduct:[]
};

 const productReducer = (state = initialState, action) => {
  switch (action.type) {
case SHOW_PRODUCT:
  return {
    ...state,showProduct:[...state.showProduct,action.payload]
  }
case DELETE_SHOW_PRODUCT:
const newShowProduct=state.showProduct.filter((product,ins)=>
  action.payload!=ins
)

  return{
    ...state,showProduct:[...newShowProduct]
  }
//////////////////////////////////////////
  case CHANGE_QUANTITY:
console.log(action.payload);

const newShowProduct1=state.showProduct.map((product)=>{
  let product1={};
  let flag=true;
  action.payload.forEach((item)=>{
    if(product.productId==item.id){
      flag=false;
      product1={...product,quantity:Number(item[item.id])}
    }else{}
  })

  if(flag==false){
    return product1
  }else{
    return product
  }




})
console.log(newShowProduct1);
    return {
      ...state,showProduct:[...newShowProduct1]
      
    };


/////////////////////////////////




    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id === action.payload
        ),
      };


      
    case SELECT_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
        selectedProduct: null,
      };
    default:
      return state;
  }
};
export default productReducer;
