import React from "react";
import {Route, Routes} from "react-router-dom";
import {Home, SignIn} from "./pages";
import {Redirect} from "./Redirect";

export function ProjectRoutes({isLogin}) {
    return (
        isLogin ? (
            <Routes>
                <Route
                    path={"/home"}
                    element={<Home />}
                />

                <Route
                    path={"/*"}
                    element={<Redirect to={"/home"} />}
                />
            </Routes>
        ) : (
            <Routes>
                <Route
                    path={"/signIn"}
                    element={<SignIn />}
                />

                <Route
                    path={"/*"}
                    element={<Redirect to={"/signIn"} />}
                />
            </Routes>
        )
    )
}
