import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import UserContext from "../context/ContextCreator";
import SideBarContext from "../context/SideBarContext";
import Cart from "./Cart";
import SearchBar from "./SearchBar";
import logo from '../images/MyCartLogo.png'


export default function Header() {
    let { user, setUser } = useContext(UserContext);
    const { setOpen } = useContext(SideBarContext);

    useEffect(() => {
        if (localStorage.getItem("user")) {
            let userData = JSON.parse(localStorage.getItem("user"));
            console.log(userData.username);
            setUser(userData);
        }
    }, [])

    function openSidebar() {
        setOpen(true);
    }

    return (
        <div className="header">
            <div className="header-container">
                <Link to="/" className="logo">
                    <img src={logo} alt='Logo' className='logo' />
                </Link>
                <div className="search-container">
                    <SearchBar />
                    <div className="search-icon">
                        <input type='button' value='Search'></input>
                    </div>

                </div>
                <div className="last-items">
                    <Link to="/cart">
                        <Cart />
                    </Link>
                    <div className="item">
                        <Link to="/signin">
                            <div className="login-item">
                                <i className="fa fa-user" aria-hidden="true" id='userLogo'></i>
                                <div>Login</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="under-header">
                <div className="uh-container">
                    <Link to="/">
                        <div className="homeButton">Home</div>
                    </Link>
                    <div className="uh-item" onClick={openSidebar}>
                        Categories
                    </div>
                </div>
            </div>
        </div>
    )
}