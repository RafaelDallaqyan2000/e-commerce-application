import { createSlice } from "@reduxjs/toolkit";
import {login} from "./actions/login";
import {registerUser} from "./actions/registerUser";
import {getUserAllData} from "./actions/getUserAllData";
import {editUserInfo} from "./actions/editUserInfo";

export interface SignInState {
    token: boolean | string,
    loading: boolean,
    error: string | boolean,
    isLogin: boolean,
    userData: any,
}

const initialState: SignInState = {
    token: '',
    loading: false,
    error: '',
    isLogin: false,
    userData: {products: []},
}

export const slice = createSlice({
    name: 'signIn',
    initialState,
    reducers: {
        editToken: (state, action) => {
            const {token} = action.payload;
            if(token === 'remove') {
                localStorage.removeItem("token");
            } else {
                localStorage.setItem("token", token);
            }
            window.location.reload();
        },
        handleFormChange: (state, action: { payload: { key: string; value: any } }) => {
            const {key, value} = action.payload;
            state[key] = value;
        }
    },
    extraReducers: (builder) => {


        builder.addCase(login.fulfilled, (state:any) => {
            state.error = '';
        })

        builder.addCase(login.rejected, (state:any, action) => {
            state.loading = false;
            state.error = action.error.message ?? '';
        })

        builder.addCase(registerUser.fulfilled, (state:any) => {
            state.error = '';
        })

        builder.addCase(registerUser.rejected, (state:any, action) => {
            state.error = action.error.message ?? '';
        })

        builder.addCase(getUserAllData.fulfilled, (state:any, action) => {
            state.userData = action.payload;
            state.error = '';
        })

        builder.addCase(getUserAllData.rejected, (state:any, action) => {
            state.error = action.error.message ?? '';
        })

        builder.addCase(editUserInfo.fulfilled, (state:any, action) => {
            console.log(action.payload, 'payload in redux')
            // state.userData = action.payload;
            state.error = '';
        })

        builder.addCase(editUserInfo.rejected, (state:any, action) => {
            state.error = action.error.message ?? '';
        })
    }
})


export const {editToken, handleFormChange} = slice.actions;
export default slice.reducer;
