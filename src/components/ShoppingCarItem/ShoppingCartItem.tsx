import React, {useEffect, useState} from "react";
import "./shoppingCartItemStyles.css";
import {useAppDispatch} from "../../store/store";
import {deleteBasketProduct} from "../../store";

export function ShoppingCartItem({item}) {

    if(!item) {
        return null
    }

    const [productCount, setProductCount] = useState(0);
    const [productPrice, setProductPrice] = useState(0);

    const dispatch = useAppDispatch();

    const {count, description, price, productImage, title, id} = item;

    useEffect(() => {
        setProductCount(count);
        setProductPrice(price)
    }, [count]);

    const handleCountChange = (e) => {
        setProductCount(e.target.value);
        setProductPrice((price / count) * e.target.value);
    };

    const handleRemoveProductClick = () => {
        dispatch(deleteBasketProduct(id))
    }

    return (
        <div className="product">
            <div className="product-image">
                <img src={productImage} alt="Product 1"/>
            </div>
            <div className="product-details">
                <div className="product-title">{title}</div>
                <div className="product-title">
                    <span style={{color: "green"}}>${productPrice}</span>
                </div>
                <div className="product-quantity">Quantity:
                    <input
                        type="number"
                        value={productCount}
                        onChange={handleCountChange}
                        min="1"
                    />
                </div>
            </div>
            <button
                className="product-remove"
                onClick={handleRemoveProductClick}
            >
                Remove
            </button>
        </div>
    )
}
