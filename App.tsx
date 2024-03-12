import React from "react";
import "./App.css";
import { Home, SignIn } from "./src/pages";
import { useSelector } from "react-redux";

function App() {

    const token = useSelector((state: any) => state.token);

    return (
        <div>
            {token ? <Home /> : <SignIn />}
        </div>
    );
}

export default App;
