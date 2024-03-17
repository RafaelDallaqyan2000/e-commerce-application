import "./addNewProductStyles.css";
import React, {useState} from "react";
import {RenderAdminPage} from "./RenderAdminPage.tsx";
import {useAppDispatch} from "../../store/store.ts";
import {addNewProduct} from "../../store/reducers/actions/addNewProduct.ts";

export function AddNewProduct() {

    const [inputsValue, setInputsValue] = useState({
        title: '',
        description: '',
        price: 0,
        count: 0,
        type: '',
        productImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAIVBMVEXt7e3V1dXu7u7b29vk5OTY2Njg4ODS0tLq6urn5+fx8fGhN1J1AAACc0lEQVR4nO2a27KDIAxFKYhg//+Dj3dFxUZIcjrTvZ7aaQeWAcJFjAEAAAAAAAAAAAAAAAAAQB3WmsiBsYxOsfWvB4Srz/0H7yKblW2eGN3Tckl14XNldCueWEVGpZ6Gw8q2bD5jxD2D0xwo1w8cW4mZHq+rd7LdWFKsL6kvy43tx1DQKOVYuuc4jANDV5+l3gxOvVTglPJMkYIUsSxIUcv6bSlLr0NNKjb0ZK8lFftZ9uukhtmMvHBTkuoezfs6UtO0T14iqUjZZaFMrEcnUuseh9aAKlLbLseTspWK1G4zSNoOKEgl20FPSaEakUp2KpQFs7zUYesVus91yUsd96iEBhSXsu1xM5824NVwFJfqXkfSBmzdOXdJS11t5v3+5756bSkbr05i1uqm+cdpS7kLp3Vzb6dsEY5HZMJS5x419fX5Z5d+1ZHKBGqZbbr0q46UzZ/tDf/bZbBDWaKRygVq7Oq7gRnSUElK5Q9mx/yZhDFJ86JS2fPrQSEmv7bp04hJ3QfqMAaStCAoFbOB8u/lNHInui9LTOrmtDi0sTsZ72ZEQamsU/r+Yw2fgtTzY/UtLYhJ5XtUjm31JyWVnWBuWI+WhaSulywfWNOClFRBoLaFsozUKQsRmfu6kFRRoNZdvYhUaaCWUMlIFQZqSQsyzfeVUtH5Epyf3vFJpYTC16NGrk9Vl/UDUlyva4dJik2K/lbhtiy35aw6prVKW30BoGda3BNO14iP9/KumnklxnKboGS1koejn5urM7saTudD/28VuJyGEVg86aVKnuFKyWZlYsNA5LtoNntV3wrivJAHAAAAAAAAAAAAAAAAAKjwB5/cHayqWx0sAAAAAElFTkSuQmCC'
    });

    const dispatch = useAppDispatch();

    const handleInputsChange = (e: any) => {
        if (e.target.name) {
            setInputsValue(prev => {
                return {
                    ...prev,
                    [e.target.name]: e.target.value
                }
            })
        }
    };

    const handleClickAddBtn = (e: any) => {
        e.preventDefault();
        e.stopPropagation();

        if (
            inputsValue.count && inputsValue.price &&
            inputsValue.productImage && inputsValue.title &&
            inputsValue.type
        ) {
            dispatch(addNewProduct(inputsValue)).then(e => {
                setInputsValue({
                    title: '',
                    description: '',
                    price: 0,
                    count: 0,
                    type: '',
                    productImage: ''
                })
            });
        } else {
            alert("Please fill in everything inputs");
        }
    }

    return (
        <>
            <h1 className="pageTitle">Add New Product</h1>
            <div className="adminPageContainer">
                <form onSubmit={handleClickAddBtn}>
                    <RenderAdminPage
                        handleChangeValue={handleInputsChange}
                        inputValue={inputsValue}
                    />
                    <div className='newProductButtonContainer'>
                        <button
                            type="submit"
                            onClick={handleClickAddBtn}
                        >
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
