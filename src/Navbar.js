import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    const name = "id"
    const [isLogin, setIsLogin] = useState(false);
    const [dropdownActive, setDropdownActive] = useState(false);

    const toggleDropdown = () => {
        setDropdownActive(!dropdownActive);
    }
    const onClickLogin = () => {
        alert("로그인");
        setIsLogin(true);
    }

    const onClickLogout = () => {
        alert("로그아웃");
        setIsLogin(false);
    }

    return (
        <nav className="Navbar">
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><a href="#">About</a></li>
                <li className={`dropdown ${dropdownActive ? 'active' : ''}`}>
                    <a onClick={toggleDropdown}>Services</a>
                    <div className="dropdown-content">
                        <a href="#">Service 1</a>
                        <a href="#">Service 2</a>
                        <a href="#">Service 3</a>
                    </div>
                </li>
                <li><a href="#">Contact</a></li>
                <li><Link to="/login">로그인</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;