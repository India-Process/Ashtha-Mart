import AsyncStorage from "@react-native-async-storage/async-storage";
import { ADDRESS_FAIL, ADDRESS_SUCCESS, USER_VALUE } from "./types";

export const userValue = ({ prop, value }) => {
  return {
    type: USER_VALUE,
    payload: { prop, value },
  };
};

export const createAddress = ({ cust_cname, cust_country, cust_state, cust_city, cust_zip, cust_address }) => async (
  dispatch
) => {
  try {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const value = await AsyncStorage.getItem("user");
    const user = JSON.parse(value);
    var raw = JSON.stringify({
      id: user.id,
      cust_cname,
      cust_country,
      cust_state,
      cust_city,
      cust_zip,
      cust_address,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://aasthamart.in/apis/ashthamart/api/address/create.php", requestOptions)
      .then((response) => response.json())
      .then((result) => addressSuccess(dispatch, result.message))
      .catch((error) => console.log("error", error));
  } catch (e) {
    console.log(e);
  }
};

export const resetPassword = ({ password }) => async (dispatch) => {
  try {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const value = await AsyncStorage.getItem("user");
    const user = JSON.parse(value);
    var raw = JSON.stringify({ id: user.id, password });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://aasthamart.in/apis/ashthamart/api/password/update.php", requestOptions)
      .then((response) => response.json())
      .then((result) => resetSuccess(dispatch, result.message))
      .catch((error) => console.log("error", error));
  } catch (e) {
    console.log(e);
  }
};

const addressSuccess = (dispatch, message) => {
  dispatch({
    type: ADDRESS_SUCCESS,
    payload: message,
  });
};

const addressFail = (dispatch, error) => {
  dispatch({
    type: ADDRESS_FAIL,
    payload: error,
  });
};

const resetSuccess = (dispatch, message) => {
  dispatch({
    type: ADDRESS_SUCCESS,
    payload: message,
  });
};

const resetFail = (dispatch, error) => {
  dispatch({
    type: ADDRESS_FAIL,
    payload: error,
  });
};
