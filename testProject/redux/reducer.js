import { createSlice } from "@reduxjs/toolkit";
import { fetchPhotos,fetchPhotosId } from "./operations";

export const slice = createSlice({
    name: "imagesList",
    initialState: {
        imagesList: [],
        photo: "",
    },
    extraReducers: {
        [fetchPhotos.fulfilled](state, action) {
            state.error = null;
            state.imagesList = action.payload;
        },
        [fetchPhotosId.fulfilled](state, action) {
            state.error = null;
            state.photo = action.payload;
        },
    }
})

