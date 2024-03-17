import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllBaskets: any = createAsyncThunk('getBasket', (): any => {

    const userId = localStorage.getItem("userId");

    return axios.get(`http://localhost:8080/basket`, {
        params: { userId }
    })
        .then(res =>  res.data)
        .catch(err => {
            throw err;
        });
})


export const getBasketByProductId: any = createAsyncThunk('getBasket/productId', (productId): any => {

    const userId = localStorage.getItem("userId");

    return axios.get(`http://localhost:8080/basket`, {
        params: { userId, productId }
    })
        .then(res =>  res.data)
        .catch(err => {
            throw err;
        });
})
