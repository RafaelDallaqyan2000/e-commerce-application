import './productItemStyles.css';
import React from "react";
import {ProductItemType} from "../../models/models";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../store/store";
import {addInBasket} from "../../store";

type ProductItemType = {
    productDetails: ProductItemType
}

export function ProductItem({productDetails}: ProductItemType) {
    const {price, title, productImage, id} = productDetails;

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleProductClick = () => {
        navigate(`/productDetails/${id}`);
    }

    const handleClickAddToCart = (e) => {
        e.stopPropagation();
        dispatch(addInBasket(productDetails));
    }

    return (
        <div className="product" onClick={handleProductClick}>
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
                    Price: <span className="productPrice">${price}</span>
                </div>
            <div>
                <button
                    style={{width: "100%", margin: "10px 0"}}
                    onClick={handleClickAddToCart}
                >
                    Add to cart
                </button>
            </div>
            </div>
        </div>
    )
}
