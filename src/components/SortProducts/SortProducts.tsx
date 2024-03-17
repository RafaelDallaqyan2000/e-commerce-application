import "./sortProducts.css";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../store/store.ts";
import {handleFormChange} from "../../store";
import {sortProducts} from "../../helpers";

const iconObject: any = {
    reduce: <span>by reduce &darr;</span>,
    add: <span>by add &#x2191;</span>,
    default: <span>by default</span>
}
export function SortProducts() {
    const [reducePrice, setReducePrice] = useState('default');

    const defaultProducts = useSelector((state: any) => state.allProducts);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(handleFormChange({
            key: "allProducts",
            value: sortProducts(defaultProducts, reducePrice)
        }))
    }, [reducePrice]);
    
    const handleSortClick = () => {

        if(reducePrice === "reduce") {

            setReducePrice("add");
        } else if(reducePrice === "add") {

            setReducePrice("default");
        } else {

            setReducePrice("reduce");
        }
    }

    return (
        <div className="sortContainer">
            <h2>Sort: </h2>

            <button
                className="sortArrows"
                onClick={handleSortClick}
            >
                {iconObject[reducePrice]}
            </button>
        </div>
    )
}
