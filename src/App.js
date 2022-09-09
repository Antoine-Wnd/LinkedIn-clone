import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { login, logout, selectUser } from './features/userSlice';
import Login from './components/Login';
import { auth } from './components/firebase';
import { onAuthStateChanged } from "firebase/auth"
import Widgets from './components/Widgets';

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {

    onAuthStateChanged(auth, (userAuth) => {

      if (userAuth) {
        // user is logged in 
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
        }))
      } else {
        // user is logged out
        dispatch(logout())

      }
    })
  }, [])

  return (
    <div className="App">

      <Header />

      {!user ? <Login /> : (

        <div className="app__body">

          <Sidebar />

          <Feed />
          {/* Widgets */}

          <Widgets />
        </div>
      )}
    </div>



  );
}

export default App;
