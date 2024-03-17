import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

type BasketType = {
    name: string;
    id: number | string;
    count: string;
    price: string;
}


export const addInBasket = createAsyncThunk('basked',
    (basketItem: BasketType) : any => {

        const userId = localStorage.getItem("userId");

        let data = {...basketItem, userId}

        return axios.post(`http://localhost:8080/basket`, data, {params: {userId}})
            .then(res => {
                alert('Product added');
                return res.data;
            })
            .catch(err => {
                throw err
            })
    })
