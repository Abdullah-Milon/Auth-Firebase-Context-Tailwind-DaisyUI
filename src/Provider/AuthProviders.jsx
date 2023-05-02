import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() =>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('auth state change', currentUser)
        });

        return() => {
            unsubscribe()
        }
    },[])

    const authInfo = {
        user,
        createUser,
        signIn,
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