import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProviders';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    if(user){
        return children
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;