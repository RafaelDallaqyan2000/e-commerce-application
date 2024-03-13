import React from "react";
import "./App.css";
import {BrowserRouter} from "react-router-dom";
import {ProjectRoutes} from "./src/Routes";

function App() {

    const token = localStorage.getItem("token") === "true";

    return (
        <BrowserRouter>
            <ProjectRoutes isLogin={token} />
        </BrowserRouter>
    );
}

export default App;
