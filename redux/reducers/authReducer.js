import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOADING,
  REGISTER_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  LOGOUT,
  SIGN_IN,
  REFRESH_MESSAGE,
} from "../actions/types";

const INITIAL_STATE = {
  username: "",
  name: "",
  email: "",
  password: "",
  usertype: 0,
  user: null,
  error: "",
  message: "",
  loginerror: "",
  loginmessage: "",
  authloading: false,
  token: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, authloading: true, error: "" };
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };

    case LOGIN_USER:
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
        loginmessage: "",
        loginerror: "",
        authloading: false,
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loginmessage: action.payload,
        user: action.user,
        loginerror: "",
        authloading: false,
        mobile: "",
        password: "",
      };

    case REFRESH_MESSAGE:
      return { ...state, loginmessage: "" };

    case LOGIN_USER_FAIL:
      return {
        ...state,
        loginerror: action.payload,
        authloading: false,
      };

    case REGISTER_USER:
      return {
        ...state,
        authloading: false,
        [action.payload.prop]: action.payload.value,
        error: "",
        message: "",
      };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        authloading: false,
        error: action.payload,
        username: "",
        name: "",
        email: "",
        password: "",
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        error: "",
        authloading: false,
        message: action.payload,
      };
    case SIGN_IN:
      return { ...state, token: action.payload, authloading: false };
    case LOGOUT:
      return { ...state, user: null, loginmessage: null, INITIAL_STATE };
    default:
      return state;
  }
};
