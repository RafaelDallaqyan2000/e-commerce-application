import './home.css';
import React from "react";
import { CustomButton, CustomTable } from "../../components";
import { useDispatch } from "react-redux";
import { clearToken } from "../../store";

export function Home() {

    const dispatch = useDispatch();
    const handlePressLogOutBtn = () => {
        dispatch(clearToken());
    }

    return (
        <div className='homeContainer'>
            <div className='btnContainer'>
                <CustomButton
                    style={{margin: '25px', width: '200px'}}
                    title='Log Out'
                    onClick={handlePressLogOutBtn}
                />
            </div>
            <CustomTable />
        </div>
    )
}
