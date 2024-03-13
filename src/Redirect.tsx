import React from "react";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export function Redirect({ to }: {to: string}) {
    let navigate = useNavigate();

    useEffect(() => {
        navigate(to);
    }, [to]);

    return null;
}
