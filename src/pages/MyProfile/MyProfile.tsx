import React, {useEffect, useState} from "react";
import {ProfileRender} from "./ProfileRender";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../store/store";
import {editUserInfo} from "../../store/reducers/actions/editUserInfo";

export function MyProfile() {
    const defaultData = useSelector(state => state.userData);
    const [userInfo, setUserInfo] = useState<any>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        setUserInfo(defaultData);
    }, [defaultData])

    const handleChangeInformation = (e) => {

        setUserInfo(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    };

    const handleSubmit = (e) => {
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
