import '../../globalStyles/signInSignUpStyles.css';
import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../store/store";
import {login} from "../../store/reducers/actions/login";

type userInfoType = {
    email: string | undefined,
    password: string | undefined,
};

type initialUserInfoType = [userInfoType, Dispatch<SetStateAction<userInfoType>>];

export function SignIn() {
    const [userData, setUserData]: initialUserInfoType = useState<userInfoType>({email: '', password: ''});
    const dispatch: any = useAppDispatch();

    const onSubmit = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if(userData.email && userData.password) {
            dispatch(login(userData))
        }
    }

    const handleMailChange = (e: any) => {
        setUserData(prev => {
            return {...prev, email: e.target.value};
        })
    }

    const handlePasswordChange = (e: any) => {
        setUserData(prev => {
            return {...prev, password: e.target.value};
        })
    }

    return (
        <div className="container">
            <h2>Sign In</h2>
            <form onSubmit={onSubmit}>
                <div className="formGroup">
                    <label htmlFor="email">Email</label>
                    <input
                        onChange={handleMailChange}
                        type="email"
                        id="email"
                        name="email"
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="password">Password</label>
                    <input
                        onChange={handlePasswordChange}
                        type="password"
                        id="password"
                        name="password"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="signInBtn"
                    onClick={onSubmit}
                >
                    Sign In
                </button>
                <p className="ifHaveDontHaveAccount">
                   If you don`t have an account, you can register <Link to={"/signUp"}>Sign Up</Link>
                </p>
            </form>
        </div>
    )
}
