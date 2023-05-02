import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null);

    const authInfo = {
        user,
    }
    // const user = {displayName: 'Sagor Nodi'}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;
/*এই AuthContext.Provider কে নিয়ে টুইস্ট আছে 
main.jsx-এর শেষে <RouterProvider router={router} />  */