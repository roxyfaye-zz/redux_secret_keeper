import request from "superagent";
import Cookies from 'js-cookie';

export const SET_TOKEN = 'SET_TOKEN';
export const SET_USER = 'SET_USER';
export const SET_ERROR = 'SET_ERROR';
export const INCR_LOADING = 'INCR_LOADING';


const base URL = "https://user-auth-test.herokuapp.com"
const api = (path) => baseURL + path;

export const register = ({
  email,
  password,
  name,
  secret
}, callback) =>

  )
