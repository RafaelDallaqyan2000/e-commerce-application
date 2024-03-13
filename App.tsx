import React from "react";
import "./App.css";
import { Home, SignIn } from "./src/pages";
import { useSelector } from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {ProjectRoutes} from "./src/Routes";

function App() {

    const token = useSelector((state: any) => state.token);

    return (
        <BrowserRouter>
            <ProjectRoutes isLogin={true} />
        </BrowserRouter>
    );
}

export default App;
