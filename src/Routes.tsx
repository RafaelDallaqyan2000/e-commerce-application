import React, {useEffect} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import {
    AddNewProduct,
    HistoryOrders,
    MyProfile,
    ProductDetails,
    ProductList,
    ShoppingCart,
    SignIn,
    SignUp
} from "./pages";
import {Redirect} from "./Redirect";
import {HeaderLayout} from "./layouts/HeaderLayout";
import {useAppDispatch} from "./store/store";
import {getUserAllData} from "./store/reducers/actions/getUserAllData";

export function ProjectRoutes({isLogin}) {
    const location = useLocation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(localStorage.getItem('token') === 'true') {
            dispatch(getUserAllData())
        }
    }, [location.pathname]);

    return (
        isLogin ? (
            <Routes>

                <Route
                    path={"/productList"}
                    element={<HeaderLayout Component={ProductList}/>}
                />

                <Route
                    path={"/profile"}
                    element={<HeaderLayout Component={MyProfile}/>}
                />

                <Route
                    path={"/productDetails/:id"}
                    element={<HeaderLayout Component={ProductDetails}/>}
                />

                <Route
                    path={"/shoppingCart"}
                    element={<HeaderLayout Component={ShoppingCart}/>}
                />

                <Route
                    path={"/orders"}
                    element={<HeaderLayout Component={HistoryOrders}/>}
                />

                <Route
                    path={"/admin"}
                    element={<HeaderLayout Component={AddNewProduct}/>}
                />

                <Route
                    path={"/*"}
                    element={<Redirect to={"/productList"}/>}
                />
            </Routes>
        ) : (
            <Routes>
                <Route
                    path={"/signIn"}
                    element={<SignIn/>}
                />

                <Route
                    path={"/signUp"}
                    element={<SignUp/>}
                />

                <Route
                    path={"/*"}
                    element={<Redirect to={"/signIn"}/>}
                />
            </Routes>
        )
    )
}
