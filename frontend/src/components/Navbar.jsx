import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import './Navbar.css';
import Logo from './assets/Logo.png';

import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

function Navbar() {

    const [user, setUser ] = useState(null);
    const [isStaff, setIsStaff] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
        setUser(currentUser);

        if (currentUser) {
            const docRef = doc(db, 'staff_requests', currentUser.uid);
            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) {
            // Not in Firestore yet, add the request
            await setDoc(docRef, {
                email: currentUser.email,
                displayName: currentUser.displayName,
                isStaff: false,
                requestedAt: new Date(),
            });
            setIsStaff(false);
            } else {
            // Already exists – check isStaff status
            const data = docSnap.data();
            setIsStaff(data.isStaff);
            }
        } else {
            setIsStaff(false);
        }
        });

        return () => unsubscribe();
    }, []);

    const handleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Check if user already exists in Firestore
            const docRef = doc(db, 'staff_requests', user.id);
            const docSnap = await getDoc(docRef);

            if(!docSnap.exists()) {
                await setDoc(docRef, {
                    email : user.email,
                    displayName : user.displayName,
                    isStaff : false, // default is not approved
                    requestedAt : new Date(),
                });
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleLogOut = async () => {
        await signOut(auth);
    };

    return (
        <nav className ="navbar">
            <div className = "navbar-left">
                <div className = "icon">
                    <img src={Logo} alt=""/>
                </div>
                <Link className = "link title" to="/">
                    UCEK flash updates
                </Link>
            </div>
            <div className = "navbar-links>">

                <div className = "navbar-right">
                    <Link className = "link" to="/">Home</Link>
                    <Link className = "link" to="/about">About</Link>
                    <Link className = "link" to="/contact">Contact</Link>
                    
                    {user && isStaff && (
                        <Link className="link" to="/upload">Upload News</Link>
                    )}
                    
                    {!user? (
                        <button onClick={handleLogin}>Staff Sign In</button>
                    ) : (
                        <>
                            <span className= "link greet" >{user.displayName || user.email}</span>
                            <button  onClick={handleLogOut}>Sign Out</button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
export default Navbar;