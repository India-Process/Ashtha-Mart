import {
  FETCH_PRODUCTS,
  PRODUCT_LOADING,
  FETCH_BANNER,
  FETCH_CATEGORY,
  FETCH_LATEST,
  LOADING,
  ADD_PRODUCTS,
  ADD_LATEST,
} from "./types";

import axios from "axios";

export const fetchLatest = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "http://aasthamart.in/apis/ashthamart/api/product/latestproduct.php"
    );
    dispatch({ type: FETCH_LATEST, payload: response.data });
    dispatch({ type: ADD_LATEST, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LOADING });
    const response = await axios.get(
      "http://aasthamart.in/apis/ashthamart/api/product/read.php"
    );
    dispatch({ type: FETCH_PRODUCTS, payload: response.data });
    dispatch({ type: ADD_PRODUCTS, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

export const fetchBanner = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "http://aasthamart.in/apis/ashthamart/api/product/sliderread.php"
    );
    dispatch({ type: FETCH_BANNER, payload: response.data.slider_list });
  } catch (err) {
    console.log(err);
  }
};

export const fetchCategory = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.get(
      "http://aasthamart.in/apis/ashthamart/api/product/categoryread.php"
    );
    dispatch({ type: FETCH_CATEGORY, payload: response.data.records });
  } catch (err) {
    console.log(err);
  }
};
