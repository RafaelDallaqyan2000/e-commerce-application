import './signIn.css';
import React, { Dispatch, SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";
import { addToken } from "../../store";

type userInfoType = {
    email: string | undefined,
    password: string | undefined,
};

type initialUserInfoType = [userInfoType, Dispatch<SetStateAction<userInfoType>>];

export function SignIn() {
    const [userData, setUserData]: initialUserInfoType = useState<userInfoType>({email: '', password: ''});
    const dispatch = useDispatch();

    const onSubmit = () => {
        if( ( userData.email === 'rafaeldallakyan4@gmail.com' ) && ( userData.password === 'qwerty12' )) {
            dispatch(addToken());
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
        <div className='bodyForSignIn'>
            <div className="container">
                <h2>Sign In</h2>
                <form onSubmit={onSubmit}>
                    <label htmlFor="username">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        onChange={handleMailChange}
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        onChange={handlePasswordChange}
                    />

                    <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
    )
}
