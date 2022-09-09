import React, { useState } from 'react'
import { auth } from './firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import "./Login.css"
import { login } from '../features/userSlice';
import { useDispatch } from 'react-redux';

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();


    const loginToApp = (e) => {
        e.PreventDefault()

        signInWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                }))
            }).catch(error => alert(error))

    }


    const register = () => {

        if (!email) {
            return alert("Entrée une adresse mail correct")
        }

        const user = auth.currentUser;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                updateProfile(user, {
                    displayEmail: email,


                })
                    .then(() => {
                        dispatch(
                            login({
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,

                            }))
                    }
                    )
            }).catch((error) => alert(error.message));


    }


    return (
        <div className='login_page' >
            <img className='logo' src="./images/linkedin-logo.png" alt="linkedin_logo" />
            <div className="login">
                <form>
                    <h2>S'identifier</h2>
                    <p className='p1'>Tenez-vous au courant des évolutions de votre monde professionnel

                    </p>


                    {/*Champs du login */}
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder='E-mail ou téléphone'
                        type="text"
                    />
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder='Mot de passe'
                        type="password"
                    />


                    <a href="/">Mot de passe oublié ? </a>

                    <button type='submit' onClick={loginToApp}>S'identifier</button>
                </form>

                <p className='p2'>Vous débutez sur LinkedIn ?{" "}
                    <span className='login__register' onClick={register}>  S'inscrire</span>
                </p>
            </div>
        </div>
    )
}

export default Login