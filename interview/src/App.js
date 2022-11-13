import './App.css';
import { useRecordWebcam, WebcamStatus } from 'react-record-webcam'
import { useState } from 'react';
import "./components/Buttons"
import RecordVideo from "./pages/RecordVideo"
import BrowseOrCreate from './pages/Browseorcreate';
import VidCritique from './pages/VidCritique';
import { initializeApp } from "firebase/app";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom"
// import * as dotenv from 'dotenv'
import API_KEY from './env';
import ProfilePage from './pages/ProfilePage';

function App(props) {

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "interevie-180a1.firebaseapp.com",
    projectId: "interevie-180a1",
    storageBucket: "interevie-180a1.appspot.com",
    messagingSenderId: "288336554896",
    appId: "1:288336554896:web:cdacb9ab3c6417d3a66115"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  return (

    // <div>
    //   {/* <VidCritique app={app} /> */}
    //   {/* <ProfilePage app={app} /> */}
    //   {/* <RecordVideo app={app} /> */}

    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BrowseOrCreate />} />
          <Route path="critique" element={<VidCritique />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path='record' element={<RecordVideo />} />
          <Route path="*" element={< p>404</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function Layout() {



  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/critique">critique</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/record">Record</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};



export default App;
