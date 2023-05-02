import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">AUTH MASTER</a>
                <Link className="navbar bg-primary text-primary-content" to="/">Home</Link>
                <Link className="navbar bg-primary text-primary-content" to="/login">Login</Link>
                <Link className="navbar bg-primary text-primary-content" to="/register">Register</Link>
            </div>
        </div>
    );
};

export default Header;