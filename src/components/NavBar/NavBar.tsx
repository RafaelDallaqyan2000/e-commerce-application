import "./navBar.css";
import React, {useEffect} from "react";
import {Link, NavLink, useLocation} from "react-router-dom";
import {useAppDispatch} from "../../store/store";
import {editToken} from "../../store";
import {getUserAllData} from "../../store/reducers/actions/getUserAllData";

export function NavBar() {

    const dispatch = useAppDispatch()
    const location = useLocation();

    const handleLogOutClick = () => {
        dispatch(editToken({token: 'remove'}))
    }

    useEffect(() => {
        if(localStorage.getItem('token') === 'true') {
            dispatch(getUserAllData())
        }
    }, [location.pathname]);


    return (
        <nav>
            <div className="logo">
                <Link to={"/productList"}>Logo</Link>
            </div>
            <input type="checkbox" id="menu-toggle"/>
            <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
            <ul className="nav-links">
                <li>
                    <NavLink
                        to={"/productList"}
                        className={({isActive}) => isActive ? "activeLink" : ''}
                    >
                        Product List
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to={"/profile"}
                        className={({isActive}) => isActive ? "activeLink" : ''}
                    >
                        Profile
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to={"/orders"}
                        className={({isActive}) => isActive ? "activeLink" : ''}
                    >
                        Orders
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to={"/shoppingCart"}
                        className={({isActive}) => isActive ? "activeLink" : ''}
                    >
                        Shopping cart
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to={"/admin"}
                        className={({isActive}) => isActive ? "activeLink" : ''}
                    >
                        Admin
                    </NavLink>
                </li>
            </ul>
            <button
                className='logOutBtn'
                onClick={handleLogOutClick}
            >
                Log Out
            </button>
        </nav>
    )
}
