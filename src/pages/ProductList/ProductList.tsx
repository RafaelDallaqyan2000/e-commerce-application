import "./productsStyle.css";
import React from "react";
import {ProductItem} from "../../components";
import {useSelector} from "react-redux";

export function ProductList() {
    const productList = useSelector(state => state.userData.products);

    return (
        <div>
            <h1 className="productsPageTitle">Products</h1>
            <div className="allProductsContainer">
                {
                    productList.map(product => (
                        <ProductItem productDetails={product}/>
                    ))
                }
            </div>
        </div>
    )
}
