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
                src={productImage || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAIVBMVEXt7e3V1dXu7u7b29vk5OTY2Njg4ODS0tLq6urn5+fx8fGhN1J1AAACc0lEQVR4nO2a27KDIAxFKYhg//+Dj3dFxUZIcjrTvZ7aaQeWAcJFjAEAAAAAAAAAAAAAAAAAQB3WmsiBsYxOsfWvB4Srz/0H7yKblW2eGN3Tckl14XNldCueWEVGpZ6Gw8q2bD5jxD2D0xwo1w8cW4mZHq+rd7LdWFKsL6kvy43tx1DQKOVYuuc4jANDV5+l3gxOvVTglPJMkYIUsSxIUcv6bSlLr0NNKjb0ZK8lFftZ9uukhtmMvHBTkuoezfs6UtO0T14iqUjZZaFMrEcnUuseh9aAKlLbLseTspWK1G4zSNoOKEgl20FPSaEakUp2KpQFs7zUYesVus91yUsd96iEBhSXsu1xM5824NVwFJfqXkfSBmzdOXdJS11t5v3+5756bSkbr05i1uqm+cdpS7kLp3Vzb6dsEY5HZMJS5x419fX5Z5d+1ZHKBGqZbbr0q46UzZ/tDf/bZbBDWaKRygVq7Oq7gRnSUElK5Q9mx/yZhDFJ86JS2fPrQSEmv7bp04hJ3QfqMAaStCAoFbOB8u/lNHInui9LTOrmtDi0sTsZ72ZEQamsU/r+Yw2fgtTzY/UtLYhJ5XtUjm31JyWVnWBuWI+WhaSulywfWNOClFRBoLaFsozUKQsRmfu6kFRRoNZdvYhUaaCWUMlIFQZqSQsyzfeVUtH5Epyf3vFJpYTC16NGrk9Vl/UDUlyva4dJik2K/lbhtiy35aw6prVKW30BoGda3BNO14iP9/KumnklxnKboGS1koejn5urM7saTudD/28VuJyGEVg86aVKnuFKyWZlYsNA5LtoNntV3wrivJAHAAAAAAAAAAAAAAAAAKjwB5/cHayqWx0sAAAAAElFTkSuQmCC"}
                alt={title}
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
