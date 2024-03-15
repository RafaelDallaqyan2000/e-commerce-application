import React from "react";
import {useLocation} from "react-router-dom";

export function ProductDetails() {
    const location = useLocation();
    console.log(location.pathname, '<<');
    return (
        <div>Product details</div>
    )
}
