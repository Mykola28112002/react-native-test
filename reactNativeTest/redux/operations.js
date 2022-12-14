
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/photos";
const API_CEY = "896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043"

export const fetchPhotos = createAsyncThunk(
  "PhotoList/fetchAll",
  async (page, thunkAPI) => {
    try {
      console.log(page)
      const params = new
        URLSearchParams({
        client_id: API_CEY,
        page: page
      });
      const response = await axios.get(`/?${params}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchPhotosId = createAsyncThunk(
  'PhotoItem/fetchAll',
  async ({id}, thunkAPI) => {
    try {
      return id;
    } catch (e) {
      console.log(e)
    }
  }
);




