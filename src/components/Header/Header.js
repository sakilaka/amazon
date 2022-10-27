import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    return (
        <nav className='nav-style'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Home</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>

                {
                    user?.uid ?

                        <Link onClick={logOut}>Log Out</Link>
                        :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signUp">Sign Up</Link>
                        </>
                }
            </div>
        </nav>
    );
};

export default Header;