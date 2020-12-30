
import {
  FETCH_PRODUCTS,
  FETCH_BANNER,
  PRODUCT_LOADING,
  LOADING,
  FETCH_LATEST,
  FETCH_CATEGORY,
} from "../actions/types";

const initialState = {
  items: [],
  banner: [],
  latest: [],
  category: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true, error: "" };
    case PRODUCT_LOADING:
      return { ...state, loading: true };
    case FETCH_PRODUCTS:
      return { ...state, items: action.payload, loading: false };
    case FETCH_BANNER:
      return { ...state, banner: action.payload, loading: false };
    case FETCH_LATEST:
      return { ...state, latest: action.payload, loading: false };
    case FETCH_CATEGORY:
      return { ...state, category: action.payload, loading: false };
    default:
      return state;
  }
}
