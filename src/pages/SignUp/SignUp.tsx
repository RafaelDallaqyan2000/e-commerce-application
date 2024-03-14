import "../../globalStyles/signInSignUpStyles.css";
import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../store/store";
import {registerUser} from "../../store/reducers/actions/registerUser";

export function SignUp() {
    const [data, setData] = useState({name: '', email: '', password: ''});

    const dispatch: any = useAppDispatch();
    const navigate = useNavigate();

    const handleChangeData = (e) => {
        const {name, value} = e.target;
        setData((prev) => {
            return {...prev, [name]: value}
        })
    }

    const handleSignUpClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch(registerUser(data));
    }

    return (
        <div className="container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUpClick}>
                <div className="formGroup">
                    <label htmlFor="firstName">FirstName</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        onChange={handleChangeData}
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="lastName">LastName</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        onChange={handleChangeData}
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        onChange={handleChangeData}
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="password">Phone Number</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        required
                        onChange={handleChangeData}
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        onChange={handleChangeData}
                    />
                </div>
                <button type="submit" className="signInBtn">Sign Up</button>
                <p className="ifHaveDontHaveAccount">
                    if you have an account let's <Link to={'/signIn'}>Sign In</Link>
                </p>
            </form>
        </div>
    )
}
