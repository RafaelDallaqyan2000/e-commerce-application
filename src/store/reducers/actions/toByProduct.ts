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


export const toByProducts = createAsyncThunk('bought/buy',
    () : any => {

        const userData = store.getState().userData;
        const userId = localStorage.getItem("userId");

        let newData = {product: userData.basket, date: new Date()};

        let data = {
            ...userData,
            bought: userData.bought.concat(newData),
            basket: []
        }

        return axios.put(`http://localhost:8080/users/${userId}`, data)
            .then(res => {
                alert('Product purchased');
                return res.data;
            })
            .catch(err => {
                console.log(err, ';')
                throw err.message
            })
    })
