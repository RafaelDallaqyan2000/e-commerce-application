import "./addNewProductStyles.css";
import React, {useState} from "react";
import {RenderAdminPage} from "./RenderAdminPage.tsx";
import {useAppDispatch} from "../../store/store.ts";
import {addNewProduct} from "../../store/reducers/actions/addNewProduct.ts";

export function AddNewProduct() {

    const [inputsValue, setInputsValue] = useState<any>({
        title: '',
        description: '',
        price: 0,
        count: 0,
        type: '',
        productImage: ''
    });

    const dispatch = useAppDispatch();

    const handleInputsChange = (e: any) => {
        if (e.target.name) {
            setInputsValue((prev: any) => {
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
            dispatch(addNewProduct(inputsValue)).then(() => {
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
