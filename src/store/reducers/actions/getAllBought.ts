import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllBought: any = createAsyncThunk('getBought', (): any => {

    const userId = localStorage.getItem("userId");

    return axios.get(`http://localhost:8080/bought`, {
        params: { userId }
    })
        .then(res => {
            return res.data;
        })
        .catch(err => {
            throw err;
        });
})
