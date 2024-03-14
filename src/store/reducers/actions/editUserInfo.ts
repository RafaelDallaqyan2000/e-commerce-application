import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const editUserInfo = createAsyncThunk('editUserInfo',
    (data) : any => {
        const userId = localStorage.getItem("userId");

        return axios.put(`http://localhost:8080/users/${userId}`,
            data,

        )
            .then(res => {
                alert('User information are changed');
                return res.data;
            })
            .catch(err => {
                throw err
            })
    })
