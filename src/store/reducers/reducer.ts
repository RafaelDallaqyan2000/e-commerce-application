import { createSlice } from "@reduxjs/toolkit";
import {login} from "./actions/login";
import {registerUser} from "./actions/registerUser";
import {getUserAllData} from "./actions/getUserAllData";
import {editUserInfo} from "./actions/editUserInfo";
import {getAllProducts} from "./actions/getAllProducts";
import {addInBasket} from "./actions/addInBasket";
import {deleteBasketProduct} from "./actions/deleteBasketProduct";

export interface SignInState {
    token: boolean | string,
    loading: boolean,
    error: string | boolean,
    isLogin: boolean,
    userData: any,
    allProducts: any[]
    defaultProducts: any[]
}

const initialState: SignInState = {
    token: '',
    loading: false,
    error: '',
    isLogin: false,
    userData: {},
    allProducts: [],
    defaultProducts: []
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
            state.userData.basket = action.payload;
            state.error = '';
        })

        builder.addCase(deleteBasketProduct.rejected, (state:any, action) => {
            state.error = action.error.message ?? '';
        })
    }
})


export const {editToken, handleFormChange} = slice.actions;
export default slice.reducer;









//{
//  "users": [
//    {
//      "id": "1e5w",
//      "firstName": "Jason",
//      "lastName": "Statham",
//      "email": "a@a",
//      "password": "a",
//      "phoneNumber": "+374999999",
//      "imageUrl": "https://i0.wp.com/folkextreme.ru/wp-content/uploads/2014/04/jason-statham-interview-2.jpg",
//      "products": [
//        {
//          "id": "111",
//          "title": "Apple",
//          "description": "This is apple",
//          "productImage": "https://media.post.rvohealth.io/wp-content/uploads/2020/09/Do_Apples_Affect_Diabetes_and_Blood_Sugar_Levels-732x549-thumbnail-1-732x549.jpg",
//          "count": 10,
//          "price": "$39.9"
//        },
//        {
//          "id": "222",
//          "title": "Banana",
//          "description": "This is banana from africa",
//          "productImage": "https://images.everydayhealth.com/images/diet-nutrition/all-about-bananas-nutrition-facts-health-benefits-recipes-and-more-rm-722x406.jpg",
//          "count": 100,
//          "price": "$29.9"
//        }
//      ]
//    },
//    {
//      "id": "e0cf",
//      "firstName": "Vika",
//      "lastName": "Vanesyan",
//      "email": "e@e",
//      "password": "e",
//      "phoneNumber": "+374888888",
//      "imageUrl": "data:image/jpeg;base64,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"
//    }
//  ]
//}
