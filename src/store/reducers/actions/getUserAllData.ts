import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
export const getUserAllData: any = createAsyncThunk('user/allData', (): any => {
    const email = localStorage.getItem('userMail');
    const password = localStorage.getItem('userPassword');

     return axios.get(`http://localhost:8080/users?email=${email}&password=${password}`)
        .then(res => {
            console.log(res.data)
            localStorage.setItem("userId", res.data[0].id);
            return res.data[0];
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
})
