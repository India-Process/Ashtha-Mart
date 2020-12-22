import { ADDRESS_FAIL, ADDRESS_SUCCESS, RESET_FAIL, RESET_SUCCESS, USER_VALUE } from "../actions/types";

const INITIAL_STATE = {
  cust_cname: "",
  cust_country: "",
  cust_state: "",
  cust_city: "",
  cust_zip: "",
  cust_address: "",
  password: "",
  message: "",
  error: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_VALUE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case ADDRESS_SUCCESS:
      return { ...state };
    case ADDRESS_FAIL:
      return { ...state };
    case RESET_FAIL:
      return { ...state };
    case RESET_SUCCESS:
      return { ...state };
    default:
      return state;
  }
};
