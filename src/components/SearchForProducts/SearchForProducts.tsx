import "./searchStyles.css";
import React, {useCallback, useEffect, useMemo, useState} from "react";
import {store, useAppDispatch} from "../../store/store.ts";
import {useSelector} from "react-redux";
import {all} from "axios";
import {filterProductsFromSearch} from "../../helpers";
import {handleFormChange} from "../../store";

export function SearchForProducts() {
    const [inputValue, setInputValue] = useState("");

    const dispatch = useAppDispatch();

    const defaultProducts = useSelector((state: any) => state.defaultProducts) ?? [];

    const handleInputChange = useCallback((e: any) => {

        dispatch(handleFormChange({
            key: "allProducts",
            value: filterProductsFromSearch(defaultProducts, e.target.value)
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
