import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

type ProductType = {
    title: string;
    description: string;
    price: string;
    count: string;
    type: string;
    productImage: string;
}


export const addNewProduct = createAsyncThunk('newProduct',
    (newProductsData: ProductType) : any => {

        return axios.post(`http://localhost:8080/products`, newProductsData)
            .then(res => {
                // alert('Product added')
                // console.log(res.data, '<<<<<<<<<<')

                return res.data;
            })
            .catch(err => {
                throw err
            })
    })
