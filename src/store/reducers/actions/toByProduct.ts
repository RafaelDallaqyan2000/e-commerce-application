import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {store} from "../../store";

export const toByProducts = createAsyncThunk('bought/buy',
    () : any => {

        const basket = store.getState().basket;
        const userId = localStorage.getItem("userId");

        let data = {
            date: new Date(),
            userId,
            products: basket
        };

        return axios.post(`http://localhost:8080/bought`, data, {
            params: { userId }
        })
            .then(res => {
                alert('Product purchased');
                return res.data;
            })
            .catch(err => {
                throw err.message;
            })
    })
