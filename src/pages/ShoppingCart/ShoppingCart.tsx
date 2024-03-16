import "./shoppingCartStyles.css";
import React from "react";
import {ShoppingCartItem} from "../../components";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../store/store.ts";
import {toByProducts} from "../../store";

export function ShoppingCart() {
    const basketProducts = useSelector((state: any) => state.userData.basket)
    const dispatch = useAppDispatch();

    const handleBuyClick = () => {
        dispatch(toByProducts())
    }

    return (
        <>
            <h1 className="pageTitle">Shopping cart</h1>
            {
                basketProducts?.length ? (
                    <div className="shoppingCartContainer">
                        {
                            basketProducts?.map((e: any) => (
                                <ShoppingCartItem key={e.id} item={e} />
                            ))
                        }
                        <button onClick={handleBuyClick}>Buy</button>
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
