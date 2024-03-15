import "./shoppingCartStyles.css";
import React from "react";
import {ShoppingCartItem} from "../../components/ShoppingCarItem/ShoppingCartItem";
import {useSelector} from "react-redux";

export function ShoppingCart() {
    const basketProducts = useSelector(state => state.userData.basket)
    console.log(basketProducts)
    return (
        <>
            <h1 className="pageTitle">Shopping cart</h1>
            <div className="shoppingCartContainer">
                {
                    basketProducts?.map(e => (
                        <ShoppingCartItem key={e.id} item={e} />
                    ))
                }
            </div>
        </>
    )
}
