import { createSlice } from "@reduxjs/toolkit";
import {login} from "./actions/login";
import {registerUser} from "./actions/registerUser";

export interface SignInState {
    token: boolean | string,
    tableData: any,
    loading: boolean,
    error: string | boolean,
    isLogin: boolean,
}

const initialState: SignInState = {
    token: '',
    tableData: [{}],
    loading: false,
    error: '',
    isLogin: false,
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
    },
    extraReducers: (builder) => {
        // builder.addCase(getTodosData.pending, (state) => {
        //     state.loading = true;
        // })
        //
        // builder.addCase(getTodosData.fulfilled, (state, action) => {
        //     state.loading = false;
        //     state.tableData = action.payload ?? [];
        //     state.error = '';
        // })
        //
        // builder.addCase(getTodosData.rejected, (state, action) => {
        //     state.loading = false;
        //     state.tableData = [];
        //     state.error = action.error.message ?? '';
        // })


        builder.addCase(login.fulfilled, (state, action) => {
            state.error = '';
        })

        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ?? '';
        })

        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.error = '';
        })

        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ?? '';
        })
    }
})


export const {editToken} = slice.actions;
export default slice.reducer;
