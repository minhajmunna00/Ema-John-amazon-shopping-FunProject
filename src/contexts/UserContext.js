import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser } from 'firebase/auth';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import app from '../Firebase/firebase.config';

export const AuthContext =createContext();
const auth = getAuth(app);




const UserContext = ({children}) => {


    const [user, setUser]=useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);

    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('current user inside state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        } );

        return () => unSubscribe();
    }, [])
    const authInfo ={user,loading,createUser,signIn,logOut}

    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
            
      
    );
};

export default UserContext;