import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">AUTH MASTER</a>
                <Link className="navbar bg-primary text-primary-content" to="/">Home</Link>
                <Link className="navbar bg-primary text-primary-content" to="/orders">Orders</Link>
                {
                    user && <Link className="navbar bg-primary text-primary-content" to="/profile">Profile</Link>
                }
                <Link className="navbar bg-primary text-primary-content" to="/login">Login</Link>
                <Link className="navbar bg-primary text-primary-content" to="/register">Register</Link>
                {
                    user ? <>
                        <span>{user.email}</span>
                        <button onClick={handleLogOut} className='btn btn-xs'>Sign out</button>
                    </> : <Link to="/login">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;