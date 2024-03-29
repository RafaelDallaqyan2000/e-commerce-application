import "./shoppingCartStyles.css";
import React, { ElementType, useEffect } from "react";
import { ShoppingCartItem } from "../../components";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store/store.ts";
import { deleteBasketProduct, toByProducts } from "../../store";
import { getAllBaskets } from "../../store/reducers";
import { ProductItemType } from "../../models/models.ts";

export function ShoppingCart() {
  const basketProducts = useSelector((state: any) => state.basket);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllBaskets());
  }, []);

  const handleBuyClick = () => {
    dispatch(toByProducts()).then((e) => {
      e.payload.products.map((e: ProductItemType) => {
        dispatch(deleteBasketProduct(e.id));
      });
    });
  };

  return (
    <>
      <h1 className="pageTitle">Shopping cart</h1>
      {basketProducts?.length ? (
        <div className="shoppingCartContainer">
          {basketProducts?.map((e: any) => (
            <ShoppingCartItem key={e.id} item={e} />
          ))}
          <button className="buyButton" onClick={handleBuyClick}>
            Buy
          </button>
        </div>
      ) : (
        <h2
          style={{
            textAlign: "center",
            fontSize: "30px",
            color: "#9c3b5d",
          }}
        >
          This Page is Empty
        </h2>
      )}
    </>
  );
}
