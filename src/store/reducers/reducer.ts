import { createSlice } from "@reduxjs/toolkit";
import { getTodosData } from "./actions/getTodosData.ts";

export interface SignInState {
    token: boolean,
    tableData: any,
    loading: boolean,
    error: string | boolean,
}

const initialState: SignInState = {
    token: false,
    tableData: [{}],
    loading: false,
    error: ''
}

export const slice = createSlice({
    name: 'signIn',
    initialState,
    reducers: {
        addToken: (state) => {
            state.token = true;
        },
        clearToken: (state) => {
            state.token = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getTodosData.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(getTodosData.fulfilled, (state, action) => {
            state.loading = false;
            state.tableData = action.payload ?? [];
            state.error = '';
        })

        builder.addCase(getTodosData.rejected, (state, action) => {
            state.loading = false;
            state.tableData = [];
            state.error = action.error.message ?? '';
        })
    }
})


export const {addToken, clearToken} = slice.actions;
export default slice.reducer;
