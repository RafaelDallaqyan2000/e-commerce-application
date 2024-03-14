import './productItemStyles.css';
import React from "react";
import {ItemType} from "../../models/models";

type ProductItemType = {
    productDetails: ItemType
}

export function ProductItem({productDetails}: ProductItemType) {
    const {price, title, productImage} = productDetails;

    return (
        <div className="product">
            <div className="productImage">
                <img
                    width={200}
                    height={150}
                    src={productImage}
                    alt="Product Image"
                />
            </div>
            <div className="productDetails">
                <div className="productDetailsStyle">
                    Title: <span className="productTitle">{title}</span>
                </div>

                <div className="productDetailsStyle">
                    Price: <span className="productPrice">{price}</span>
                </div>
            </div>
        </div>
    )
}
