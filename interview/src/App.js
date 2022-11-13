import './App.css';
import { useRecordWebcam, WebcamStatus } from 'react-record-webcam'
import { useState } from 'react';
import "./components/Buttons"
import RecordVideo from "./pages/RecordVideo"
import BrowseOrCreate from './pages/Browseorcreate';
import VidCritique from './pages/VidCritique';

function App(props) {

  return (
    <div>
      <VidCritique prompt={"Why do you want to work at apple"} />
    </div>
  )
}


export default App;
