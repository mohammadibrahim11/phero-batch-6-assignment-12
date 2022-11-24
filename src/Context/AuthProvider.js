
import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";



export const Authcontext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    // const [user,setUser]= useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const authInfo={
        createUser,
        
    }
    return (
     <Authcontext.Provider value={authInfo}>
        {children}
     </Authcontext.Provider>
    );
};

export default AuthProvider;