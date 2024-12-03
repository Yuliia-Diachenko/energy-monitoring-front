import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://energy-monitoring.onrender.com/";

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };
  
  const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = "";
  };


export const register = createAsyncThunk("auth/register", 
    async (newUser, thunkApi) =>{
    try {
        const responce = await axios.post("/auth/register", newUser);
        setAuthHeader(responce.data.token);
        return responce.data;
    } catch(error) {
        return thunkApi.rejectWithValue(error.massage);
}
});

export const logIn = createAsyncThunk("auth/login",
    async (userInfo, thunkAPI) => {
      try {
        const responce = await axios.post("/auth/login", userInfo);
        setAuthHeader(responce.data.token);
        return responce.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

export const logOut = createAsyncThunk("auth/logout", 
    async (_, thunkAPI) => {
    try {
        const responce = await axios.post("/auth/logout");
      clearAuthHeader();
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });
  

export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      setAuthHeader(reduxState.auth.token);
  
      const res = await axios.get("/auth/refresh");
      return res.data;
    },
    {
      condition(_, thunkAPI) {
        const reduxState = thunkAPI.getState();
        return reduxState.auth.token !== null;
      },
    }
  );