import "./addNewProductStyles.css";
import React from "react";


type AdminPageType = {
    handleChangeValue: (e: any) => any;
    inputValue: any
}

export function RenderAdminPage({
    handleChangeValue,
    inputValue
}: AdminPageType) {

    const {
        productImage,
        type,
        description,
        price,
        count,
        title
    } = inputValue;

    return (
        <>
            <img
                src={productImage}
                width={200}
                height={200}
            />
            <div className="formGroup">
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    value={title}
                    onChange={handleChangeValue}
                />
            </div>
            <div className="formGroup">
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    required
                    value={description}
                    onChange={handleChangeValue}
                >

                        </textarea>
            </div>
            <div className="formGroup">
                <label htmlFor="price">Price: $</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    min="0"
                    step="0.01"
                    required
                    value={price}
                    onChange={handleChangeValue}
                />
            </div>
            <div className="formGroup">
                <label htmlFor="count">Count:</label>
                <input
                    type="number"
                    id="count"
                    name="count"
                    min="0"
                    required
                    value={count}
                    onChange={handleChangeValue}
                />
            </div>
            <div className="formGroup">
                <label htmlFor="type">Type:</label>
                <input
                    type="text"
                    id="type"
                    name="type"
                    value={type}
                    onChange={handleChangeValue}
                    required
                />
            </div>
            <div className="formGroup">
                <label htmlFor="productImage">Product Image:</label>
                <input
                    type="text"
                    id="productImage"
                    name="productImage"
                    value={productImage}
                    onChange={handleChangeValue}
                    required
                />
            </div>
        </>
    )
}
