import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type ProductType = {
  id: number | string;
  title: string;
  description: string;
  price: string;
  count: string;
  type: string;
  productImage: string;
};

export const editDuplicatedBasketProduct = createAsyncThunk(
  "newProduct",
  ({ id, ...res }: ProductType): any => {
    return axios
      .put(`http://localhost:8080/basket/${id}`, res)
      .then((res) => {
        alert("Product added");
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  }
);
