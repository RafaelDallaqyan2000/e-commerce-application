import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const deleteBasketProduct = createAsyncThunk('basked/delete',
    (productId) : any => {

        return axios.delete(`http://localhost:8080/basket/${productId}`)
            .then((res) => {
                // alert('Product deleted');
                return res.data;
            })
            .catch(err => {
                throw err;
            })
    })


export const clearBasketArray = createAsyncThunk('basked/clear',
    (productId) : any => {

        const userId = localStorage.getItem("userId");

        return axios.delete(`http://localhost:8080/basket`, {
            params: { userId }
        })
            .then((res) => {
                // alert('Product deleted');
                return res.data;
            })
            .catch(err => {
                throw err;
            })
    })
