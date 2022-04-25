import React, { useRef, useState, useEffect } from 'react'
import styles from '../Styles/login.module.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


export default function Login() {

    const emailLogin = useRef()
    const passwordLogin = useRef()
    const navigation = useNavigate()

    function handelLogin() {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, emailLogin.current.value, passwordLogin.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                const { uid, email } = user
                alert("LogIn Successfully")
                navigation("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("Unable to Login")
            });
    }

    return (
        <div className={styles.userDetailsContainer}>
            <div className={styles.formcard}>
                <div className={styles.formHeading}>Enter Login details</div>
                <div className={styles.formSection}>
                    <div className="input-group full">
                        <label>Email</label>
                        <div className="effect">
                            <input type="text" name="email" ref={emailLogin} className={styles.inputField} />
                        </div>
                    </div>
                    <div className="input-group full">
                        <label>Password</label>
                        <div className="effect">
                            <input type="password" name="password" ref={passwordLogin} className={styles.inputField} />
                        </div>
                    </div>
                    <div className={styles.formBtn}>
                        <input type='submit' onClick={handelLogin} />
                    </div>
                </div>

                <div >
                    <Link to="/signup">
                        Not Registered Yet ? Signup Here
                    </Link>
                </div>
            </div>
        </div>
    )
}