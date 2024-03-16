import "./searchStyles.css";
import React, {useCallback, useState} from "react";
import {useAppDispatch} from "../../store/store.ts";
import {useSelector} from "react-redux";
import {searchProducts} from "../../helpers";
import {handleFormChange} from "../../store";

export function SearchForProducts() {
    const [inputValue, setInputValue] = useState("");

    const dispatch = useAppDispatch();

    const defaultProducts = useSelector((state: any) => state.defaultProducts) ?? [];

    const handleInputChange = useCallback((e: any) => {

        dispatch(handleFormChange({
            key: "allProducts",
            value: searchProducts(defaultProducts, e.target.value)
        }))
        setInputValue(e.target.value);

    }, [inputValue, defaultProducts])

    return (
        <div className="searchBarContainer">
            <h2>Search: </h2>
            <input
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Search product"
            />
        </div>
    )
}
