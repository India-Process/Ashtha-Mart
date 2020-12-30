import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  ADD_TO_ITEMS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EMPTY_CART,
  INCREMENT,
  DECREMENT,
} from "./types";

export const addToItems = (item) => (dispatch) => {
  dispatch({
    type: ADD_TO_ITEMS,
    payload: item,
  });
};

export const addToCart = (item) => async (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: item,
  });
  
};

export const removeItem = (item) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: item,
  });
};
export const emptyCart = () => (dispatch) => {
  dispatch({
    type: EMPTY_CART,
  });
};

export const increment = (item) => (dispatch) => {
  dispatch({
    type: INCREMENT,
    payload: item,
  });
};

export const decrement = (item) => (dispatch) => {
  dispatch({
    type: DECREMENT,
    payload: item,
  });
};
