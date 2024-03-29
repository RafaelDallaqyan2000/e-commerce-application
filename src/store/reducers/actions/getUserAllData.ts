import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getUserAllData: any = createAsyncThunk('userData', (): any => {
    const email = localStorage.getItem('userMail');
    const password = localStorage.getItem('userPassword');

     return axios.get(`http://localhost:8080/users?email=${email}&password=${password}`)
        .then(res => {
            localStorage.setItem("userId", res.data[0].id);
            return res.data[0];
        })
        .catch(err => {
            throw err;
        });
})
