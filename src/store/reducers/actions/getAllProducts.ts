import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts: any = createAsyncThunk('allProducts', (): any => {

    return axios.get(`http://localhost:8080/products`)
        .then(res =>  res.data)
        .catch(err => {
            throw err;
        });
})
