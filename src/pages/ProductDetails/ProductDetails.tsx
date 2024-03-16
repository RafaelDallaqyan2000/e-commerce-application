import "./productDetailsStyle.css";
import React from "react";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {ProductItemType} from "../../models/models";

export function ProductDetails() {
    const location = useLocation();

    const pathSplit = location.pathname.split("/");
    const productId = pathSplit[pathSplit.length - 1];

    const findProduct: ProductItemType = useSelector(
        state => state.allProducts.find(e => e.id == productId) //<<<<<<<<<<
    ) ?? {};

    const {productImage, price, title, count, description} = findProduct;

    return (
        <div>
            <h1 className="pageTitle">Product Details</h1>
            <div className="detailsContainer">
                <h1 id="product-title">
                    {title}
                </h1>
                <img
                    id="product-image"
                    className="productImage"
                    src={productImage}
                    alt="Product Image"
                />
                <div
                    id="product-description"
                    className="productDescription"
                >
                    <span>Description: </span>
                    {description}
                </div>
                <div
                    id="product-price"
                    className="productPrice"
                >
                    <span>Price: </span>{price}
                </div>
                <div
                    id="product-count"
                    className="productCount"
                >
                    <span>In Stock:</span> <span
                    style={{
                        color: count > 0
                            ? "#05b705"
                            : "#ce0068"
                    }}>
                    {count}
                </span>
                </div>
            </div>
        </div>
    )
}
