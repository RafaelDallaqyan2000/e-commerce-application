import React, {useEffect, useState} from "react";
import {ProfileRender} from "./ProfileRender";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../store/store";
import {editUserInfo, getUserAllData} from "../../store";

export function MyProfile() {
    const defaultData = useSelector((state: any) => state.userData);
    const [userInfo, setUserInfo] = useState<any>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getUserAllData());
    }, []);


    useEffect(() => {
        setUserInfo(defaultData);
    }, [defaultData])

    const handleChangeInformation = (e: any) => {

        if(e.target.name === "password") {
            localStorage.setItem("userPassword", e.target.value);
        }
        if(e.target.name === "email") {
            localStorage.setItem("userMail", e.target.value)
        }
        setUserInfo((prevState: any) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    };

    const handleSubmit = (e: any) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch(editUserInfo(userInfo));
    }

    return (
        <ProfileRender
            userData={userInfo}
            handleChangeUserData={handleChangeInformation}
            handleSubmit={handleSubmit}
        />
    )
}
