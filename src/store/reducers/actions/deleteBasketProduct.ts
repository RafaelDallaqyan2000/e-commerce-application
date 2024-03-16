import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {store} from "../../store";

type SignUpType = {
    email: string;
    password: string;
    name: string;
    id?: number | string;
    count?: string;
}


export const deleteBasketProduct = createAsyncThunk('basked/delete',
    (productId) : any => {

        const userData = store.getState().userData;
        const userId = localStorage.getItem("userId");

        const filteredProduct = userData.basket.filter((e: any) => e.id !== productId);

        let data = {...userData, basket: filteredProduct};

        return axios.put(`http://localhost:8080/users/${userId}`, data)
            .then(() => {
                alert('Product deleted');
                return filteredProduct;
            })
            .catch(err => {
                throw err;
            })
    })
