import "./filterStyles.css";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../store/store.ts";
import {handleFormChange} from "../../store";
import {clearDuplication} from "../../helpers";

export function FilterProducts() {

    const allProducts = useSelector((state: any) => state.defaultProducts) ?? [];
    const dispatch = useAppDispatch();
    const [filterType, setFilterType] = useState('');
    const [filterPrice, setFilterPrice] = useState('');

    const applyFilters = () => {
        let filtered = allProducts;

        if (filterType) {
            filtered = filtered.filter(product => product.type === filterType);
        }

        if (filterPrice) {
            filtered = filtered.filter(product => product.price <= parseInt(filterPrice));
        }

        dispatch(handleFormChange({
            key: "allProducts",
            value: filtered
        }));
    };

    const handleFilterTypeChange = (e) => {
        setFilterType(e.target.value);
    };

    const handleFilterPriceChange = (e) => {
        setFilterPrice(e.target.value);
    };

    const handleFilterApply = () => {
        applyFilters();
    };

    useEffect(() => {
        let a = allProducts.filter((e, i, o) => {
            console.log(o, i);
            return e;
        })
    }, [allProducts])

    return (
        <div className="filterContainer">
                <div>
                    <label
                        htmlFor="typeFilter"
                        className="filterByType"
                    >
                        Filter by Type:
                    </label>
                    <select
                        id="typeFilter"
                        value={filterType}
                        onChange={handleFilterTypeChange}>
                        <option value="">
                            All
                        </option>
                        {
                            clearDuplication(allProducts).map((type: any, i: number) => {
                               return (
                                   <option
                                        key={type + i}
                                        value={type}
                                    >
                                        {type}
                                    </option>
                               )
                            })
                        }
                    </select>
                </div>
                <div>
                    <label
                        htmlFor="priceFilter"
                        className="filterByPrice"
                    >
                        Filter by Price (max):
                    </label>
                    <input
                        type="number"
                        id="priceFilter"
                        value={filterPrice}
                        onChange={handleFilterPriceChange}
                        placeholder="Enter max price"
                    />
                </div>
                <button
                    className="filterButton"
                    onClick={handleFilterApply}
                >
                    Apply Filters
                </button>
        </div>
    )
}
