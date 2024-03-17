import "./filterStyles.css";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../store/store.ts";
import {handleFormChange} from "../../store";
import {clearDuplication} from "../../helpers";
import { ProductItemType } from "../../models/models.ts";

export function FilterProducts() {

    const allProductsFixed = useSelector((state: any) => state.defaultProducts) ?? [];
    const dispatch = useAppDispatch();
    const [filterType, setFilterType] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    useEffect(() => {
        applyFilters();
      }, [minPrice, maxPrice, filterType]); 

    const handleFilterTypeChange = (e: any) => setFilterType(e.target.value);
  
    const handleMinChange = (e: any) => {
      setMinPrice(e.target.value);
    };
  
    const handleMaxChange = (e: any) => {
      setMaxPrice(e.target.value);
    };
      
    const applyFilters = () => {
        let filtered = allProductsFixed.filter((item: ProductItemType) => {
            const value = item.price;
            const type = item.type;
      
            const typePass = !filterType || type === filterType;
      
            const pricePass = (!minPrice || value >= parseInt(minPrice)) && (!maxPrice || value <= parseInt(maxPrice));
          
            return  pricePass && typePass;
          });
      
        dispatch(handleFormChange({
            key: "allProducts",
            value: filtered
        }))
    };

    
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
                            clearDuplication(allProductsFixed).map((type: any, i: number) => {
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
                        htmlFor="priceFilterMin"
                        className="filterByPrice"
                    >
                        Filter by Price (min):
                    </label>
                    <input
                        type="number"
                        id="priceFilterMin"
                        value={minPrice}
                        onChange={handleMinChange}
                        placeholder="Enter max price"
                    />
                    <label
                        htmlFor="priceFilterMax"
                        className="filterByPrice"
                    >
                        Filter by Price (max):
                    </label>
                    <input
                        type="number"
                        id="priceFilterMax"
                        value={maxPrice}
                        onChange={handleMaxChange}
                        placeholder="Enter max price"
                    />
                </div>
        </div>
    )
}
