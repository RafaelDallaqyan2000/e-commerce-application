import React from "react";
import {NavBar} from "../../components/NavBar";

export function HeaderLayout ({Component}) {
    return (
        <div>
            <NavBar />
            <div className="headerLayout">
                <Component />
            </div>
        </div>
    );
}

