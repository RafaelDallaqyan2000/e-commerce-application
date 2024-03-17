import React, {ElementType} from "react";
import {NavBar} from "../../components";

export function HeaderLayout({Component}: {Component: ElementType}) {

    return (
        <div>
            <NavBar/>
            <div className="headerLayout">
                <Component />
            </div>
        </div>
    );
}

