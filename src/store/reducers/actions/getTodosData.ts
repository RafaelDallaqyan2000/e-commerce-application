import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getTodosData: any = createAsyncThunk('user/fetchUsers/fulfilled', (): any => {
     return axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.data)
        .catch(err => {
            console.log(err);
            return err;
        });
})
