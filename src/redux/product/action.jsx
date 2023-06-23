import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SELECT_PRODUCT,
  UPDATE_PRODUCT,
  SHOW_PRODUCT,
  DELETE_SHOW_PRODUCT,
  CHANGE_QUANTITY,
} from "./constant";

export const showProduct = (product) => ({
  type: SHOW_PRODUCT,
  payload: product,
});

export const deleteShowProduct = (product) => ({
  type: DELETE_SHOW_PRODUCT,
  payload: product,
});


export const changeQuantity = (product) => ({
  type: CHANGE_QUANTITY,
  payload: product,
});










export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload: id,
});

export const selectedProduct = (product) => ({
  type: SELECT_PRODUCT,
  payload: product,
});

export const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  payload: product,
});
