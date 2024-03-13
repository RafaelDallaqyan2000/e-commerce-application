import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {store} from "../../store";
import {editToken} from "../reducer";

type LoginType = {
    email: string;
    password: string;
}


export const login = createAsyncThunk('getLoginUser',
    ({email, password}: LoginType) : any => {

    return axios.get(
        `http://localhost:8080/users?email=${email}&password=${password}`
    )
        .then(res => {
            if(res.data.length) {
                store.dispatch(editToken({token: 'true'}))
            } else {
                alert('Not registered')
            }
            return res.data[0];
        })
        .catch(err => {
            throw err
        })
})
