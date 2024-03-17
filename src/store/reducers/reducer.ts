import {createSlice} from "@reduxjs/toolkit";
import {login} from "./actions/login";
import {registerUser} from "./actions/registerUser";
import {getUserAllData} from "./actions/getUserAllData";
import {editUserInfo} from "./actions/editUserInfo";
import {getAllProducts} from "./actions/getAllProducts";
import {addInBasket} from "./actions/addInBasket";
import {deleteBasketProduct} from "./actions/deleteBasketProduct";
import {toByProducts} from "./actions/toByProduct.ts";
import {addNewProduct} from "./actions/addNewProduct.ts";
import {getAllBaskets} from "./actions/getAllBasket.ts";
import {getAllBought} from "./actions/getAllBought.ts";

export interface SignInState {
    token: boolean | string,
    loading: boolean,
    error: string | boolean,
    isLogin: boolean,
    userData: any,
    allProducts: any[],
    defaultProducts: any[],
    bought: any[]
    basket: any[]
}

const initialState: SignInState = {
    token: '',
    loading: false,
    error: '',
    isLogin: false,
    userData: {},
    allProducts: [],
    defaultProducts: [],
    bought: [],
    basket: [],
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
        handleFormChange: (state:any, action: { payload: { key: string; value: any } }) => {
            const {key, value} = action.payload;
            state[key] = value;
        },
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

        builder.addCase(getUserAllData.pending, (state: any) => {
            state.loading = true
        })

        builder.addCase(getUserAllData.fulfilled, (state:any, action) => {
            state.userData = action.payload;
            state.error = '';
            state.loading = false;
        })

        builder.addCase(getUserAllData.rejected, (state:any, action) => {
            state.error = action.error.message ?? '';
            state.loading = false;
        })

        builder.addCase(editUserInfo.fulfilled, (state:any, action) => {
            state.error = '';
        })

        builder.addCase(editUserInfo.rejected, (state:any, action) => {
            state.error = action.error.message ?? '';
        })

        builder.addCase(getAllProducts.fulfilled, (state:any, action) => {
            state.allProducts = action.payload;
            state.defaultProducts = action.payload;
            state.error = '';
        })

        builder.addCase(getAllProducts.rejected, (state:any, action) => {
            state.error = action.error.message ?? '';
        })

        builder.addCase(addInBasket.fulfilled, (state:any, action) => {
            state.error = '';
        })

        builder.addCase(addInBasket.rejected, (state:any, action) => {
            state.error = action.error.message ?? '';
        })

        builder.addCase(deleteBasketProduct.fulfilled, (state:any, action) => {
            state.error = '';
            state.basket = state.basket.filter((e: any) => {
                return action.payload.id !== e.id;
            });
        })

        builder.addCase(deleteBasketProduct.rejected, (state:any, action) => {
            state.error = action.error.message ?? '';
        })

        builder.addCase(toByProducts.fulfilled, (state:any, action) => {
            state.bought = action.payload.bought;
            // state.basket = [];
            state.error = '';
        })

        builder.addCase(toByProducts.rejected, (state:any, action) => {
            state.error = action.error.message ?? '';
        })

        builder.addCase(addNewProduct.fulfilled, (state:any, action) => {
            state.error = '';
        })

        builder.addCase(addNewProduct.rejected, (state:any, action) => {
            state.error = action.error.message ?? '';
        })

        builder.addCase(getAllBaskets.fulfilled, (state:any, action) => {

            const findAndIncrementDuplicates = (arr: any, propertyName: any) => {
                // Create an object to store counts of each property value
                const counts: any = {};

                console.log('aaaaaaaaaaaa')
                // Iterate over the array to count occurrences of each property value
                arr.forEach((obj: any) => {
                    const propertyValue = obj[propertyName];
                    counts[propertyValue] = (counts[propertyValue] || 0) + 1;
                });

                // Create a new array with duplicates incremented
                const newArray = arr.map(obj => {
                    const propertyValue = obj[propertyName];
                    if (counts[propertyValue] > 1) {
                        counts[propertyValue]--; // Decrease count to prevent incrementing the next occurrence
                        return { ...obj, [propertyName]: `${propertyValue}${counts[propertyValue]}` };
                    }
                    return obj;
                });

                return newArray;
            };
            state.basket = findAndIncrementDuplicates(action.payload, "title")
            state.error = '';
        })

        builder.addCase(getAllBaskets.rejected, (state:any, action) => {
            state.error = action.error.message ?? '';
        })

        builder.addCase(getAllBought.fulfilled, (state:any, action) => {
            state.bought = action.payload;
            state.error = '';
        })

        builder.addCase(getAllBought.rejected, (state:any, action) => {
            state.error = action.error.message ?? '';
        })
    }
})


export const {editToken, handleFormChange} = slice.actions;
export default slice.reducer;
