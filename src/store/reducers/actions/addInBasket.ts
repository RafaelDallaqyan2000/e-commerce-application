import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {store} from "../../store";
import {getUserAllData} from "./getUserAllData";

type SignUpType = {
    email: string;
    password: string;
    name: string;
    id?: number | string;
    count?: string;
}


export const addInBasket = createAsyncThunk('basked',
    (basketItem: SignUpType) : any => {

        const userData = store.getState().userData;
        const userId = localStorage.getItem("userId");

        const filteredBaskedProducts = userData.basket.map(e => {
            if(e.id === basketItem.id) {
                return {
                    ...e,
                    count: e.count + basketItem.count,
                    price: +e.price + +basketItem.price
                }
            }
            return e
        });

        const findAddedBasket = userData.basket.find(e =>  e.id == basketItem.id);

        let data;

        if(findAddedBasket?.id === basketItem.id) {
            data = {...userData, basket: filteredBaskedProducts};
        } else {
            data = {...userData, basket: [...userData.basket, basketItem]};

        }

        return axios.patch(`http://localhost:8080/users/${userId}`, data)
            .then(res => {
                alert('Product added')
                store.dispatch(getUserAllData())
                return res.data;
            })
            .catch(err => {
                throw err
            })
    })
