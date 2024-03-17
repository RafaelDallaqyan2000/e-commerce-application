import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { log } from "console";

type BasketType = {
    name: string;
    id: number | string;
    count: string;
    price: string;
}


export const addInBasket = createAsyncThunk('basked',
    ({ id : productId, ...rest }: BasketType) : any => {

        const userId = localStorage.getItem("userId");        

        let data = {...rest, userId, productId}

        return axios.post(`http://localhost:8080/basket`, data)
            .then(res => {
                alert('Product added');
                return res.data;
            })
            .catch(err => {
                throw err
            })
    })
