import "./productsStyle.css";
import React, {useEffect} from "react";
import {FilterProducts, ProductItem, SearchForProducts, SortProducts} from "../../components";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../store/store";
import {getAllProducts} from "../../store";

export function ProductList() {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);

    const productList = useSelector(state => state.allProducts);

    return (
        <div>
            <h1 className="pageTitle">Products</h1>
            <div className="findProductContainer">
                <SearchForProducts />
                <SortProducts />
                <FilterProducts />
            </div>
            <div className="allProductsContainer">
                {
                    productList.map(product => (
                        <ProductItem key={product.id} productDetails={product} />
                    ))
                }
            </div>
        </div>
    )
}
