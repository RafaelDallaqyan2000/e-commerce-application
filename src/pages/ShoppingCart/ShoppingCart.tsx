import "./shoppingCartStyles.css";
import React from "react";
import {ShoppingCartItem} from "../../components/ShoppingCarItem/ShoppingCartItem";
import {useSelector} from "react-redux";

export function ShoppingCart() {
    const basketProducts = useSelector(state => state.userData.basket)

    return (
        <>
            <h1 className="pageTitle">Shopping cart</h1>
            {
                basketProducts?.length ? (

            <div className="shoppingCartContainer">
                {
                    basketProducts?.map(e => (
                        <ShoppingCartItem key={e.id} item={e} />
                    ))
                }
            </div>
                ) : (
                    <h2
                        style={{
                            textAlign: 'center',
                            fontSize: "30px",
                            color: "#9c3b5d"
                    }}>
                        This Page is Empty
                    </h2>
                )
            }
        </>
    )
}
