import {
  INCREMENT,
  DECREMENT,
  ADD_TO_CART,
  EMPTY_CART,
  REMOVE_FROM_CART,
  ADD_PRODUCTS,
  ADD_LATEST,
} from "../actions/types";

const initialState = {
  latest: [],
  items: [],
  cart: [],
  total: 0,
  count: 1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCTS:
      return { ...state, items: action.payload };
    case ADD_LATEST:
      return {
        ...state,
        latest: action.payload,
      };
    case ADD_TO_CART:
      let join = state.latest.concat(state.items);
      let addedItem = join.find((item) => item.id === action.payload.id);
      let existed_items = state.cart.find(
        (item) => action.payload.id === item.id
      );
      console.log(addedItem);
      if (existed_items) {
        addedItem.quantity2 += 1;
        return {
          ...state,
          total: state.total + parseInt(action.payload.currentprice),
        };
      } else {
        addedItem.quantity2 = 1;
        const newTotal = state.total + parseInt(addedItem.currentprice);
        return {
          ...state,
          cart: [...state.cart, addedItem],
          total: newTotal,
        };
      }

    case EMPTY_CART:
      return {
        ...state,
        cart: [],
        total: null,
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item, i) => i !== action.payload.index),
        total:
          state.total -
          parseInt(action.payload.item.currentprice) *
            action.payload.item.quantity2,
      };
    case INCREMENT:
      let join2 = state.latest.concat(state.items);
      let addedItem2 = join2.find((item) => action.payload.id === item.id);

      addedItem2.quantity2 += 1;
      return {
        ...state,
        total: state.total + parseInt(addedItem2.currentprice),
        count: state.count + 1,
      };
    case DECREMENT:
      let join3 = state.latest.concat(state.items);
      let addedItem3 = join3.find((item) => item.id === action.payload.id);
      if (addedItem3.quantity2 === 1) {
        let new_items = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          cart: new_items,
          total: state.total - parseInt(addedItem3.currentprice),
          count: state.count - 1,
        };
      } else {
        let join4 = state.latest.concat(state.items);
        let addedItem4 = join4.find((item) => item.id === action.payload.id);
        addedItem4.quantity2 -= 1;
        return {
          ...state,
          total: state.total - parseInt(addedItem4.currentprice),
          count: state.count - 1,
        };
      }

    default:
      return state;
  }
}
