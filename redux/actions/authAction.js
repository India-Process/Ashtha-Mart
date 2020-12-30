import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from "../../navigation/RootNavigation";

import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOADING,
  LOGOUT,
  REFRESH_MESSAGE
} from "../actions/types";

export const userValue = ({ prop, value }) => {
  return {
    type: LOGIN_USER,
    payload: { prop, value },
  };
};

export const loginUser = ({ mobile, password }) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    var formdata = new FormData();
    formdata.append("username", mobile);
    formdata.append("password", password);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    const response = await axios.post("http://aasthamart.in/apis/sign-in-up.php?apicall=login", formdata, {
      requestOptions,
    });
    console.log(response.data);
    response.data.error === false
      ? [
          loginUserSuccess(dispatch, response.data.message, response.data.user),
          RootNavigation.navigate("Home"),
          await AsyncStorage.setItem("user", JSON.stringify(response.data.user)),
        ]
      : loginUserFail(dispatch, response.data.message);
  } catch (err) {
    console.log(err);
    loginUserFail(dispatch, err);
  }
};

export const registerUser = ({ username, name, email, password, usertype }) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    var formdata = new FormData();
    formdata.append("username", username);
    formdata.append("password", password);
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("usertype", usertype);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    const response = await axios.post("http://aasthamart.in/apis/sign-in-up.php?apicall=signup", formdata, {
      requestOptions,
    });
    console.log(response);
    response.data.error === false
      ? [registerUserSuccess(dispatch, response.data.message), RootNavigation.navigate("Signin")]
      : registerUserFail(dispatch, response.data.message);

    response.data.success;
  } catch (err) {
    console.log(err);
    registerUserFail(dispatch, err);
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
  await AsyncStorage.clear();
  RootNavigation.navigate("Home");
};

const loginUserFail = (dispatch, error) => {
  dispatch({
    type: LOGIN_USER_FAIL,
    payload: error,
  });
};

const loginUserSuccess = (dispatch, message, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: message,
    user,
  });
  setTimeout(() => {
    dispatch({
      type: REFRESH_MESSAGE,
    });
  }, 3000);
};

const registerUserFail = (dispatch, error) => {
  dispatch({
    type: REGISTER_USER_FAIL,
    payload: error,
  });
};
const registerUserSuccess = (dispatch, message) => {
  dispatch({
    type: REGISTER_USER_SUCCESS,
    payload: message,
  });
};
