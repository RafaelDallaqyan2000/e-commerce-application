import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {store} from "../../store";
import {editToken} from "../reducer";

type SignUpType = {
    email: string;
    password: string;
    name: string;
}


export const registerUser = createAsyncThunk('registerUser',
    (data: SignUpType) : any => {

        return axios.post(`http://localhost:8080/users`, data)
            .then(res => {
                if(Object.keys(res.data).length) {
                    store.dispatch(editToken({token: 'true'}))
                }
                return res.data;
            })
            .catch(err => {
                throw err
            })
    })
