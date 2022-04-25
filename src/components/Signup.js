import React, { useRef, useEffect, useState } from 'react'
import style from '../Styles/signup.module.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


export default function Signup() {

    const navigation = useNavigate()
    const name = useRef()
    const emailRegister = useRef()
    const passwordRegister = useRef()


    async function handelRegister() {

        const auth = getAuth();
        try {
            let user = await createUserWithEmailAndPassword(auth, emailRegister.current.value, passwordRegister.current.value)
            alert("You are Registered Now")
            navigation("/")
        }
        catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Unable to Register" + " " + errorMessage)
        }
    }
    return (
        <div className={style.userDetailsContainer}>
            <div class={style.formcard}>
                <div className={style.formHeading}>Enter Login details</div>
                <div className={style.formSection}>
                    <div class="input-group full">
                        <label>Name</label>
                        <div class="effect">
                            <input type="text" name="name" ref={name} className={style.inputField} />
                        </div>
                    </div>

                    <div class="input-group full">
                        <label>Email</label>
                        <div class="effect">
                            <input type="text" name="email" ref={emailRegister} className={style.inputField} />
                        </div>
                    </div>

                    <div class="input-group full">
                        <label>Password</label>
                        <div class="effect">
                            <input type="password" name="password" ref={passwordRegister} className={style.inputField} />
                        </div>
                    </div>
                    <div class="form-buttons">
                        <button className={style.formButton} type="button" onClick={handelRegister}>Register</button>
                    </div>

                </div>

                <div className={style.bottomText}>
                    <Link to="/signin">
                        Already Registered ? SignIn Here
                    </Link>
                </div>
            </div>
        </div>
    )
}