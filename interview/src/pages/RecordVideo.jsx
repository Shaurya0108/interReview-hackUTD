import '../App.css';
import { useRecordWebcam, WebcamStatus } from 'react-record-webcam'
import { useState } from 'react';
import "../components/Buttons"
import RenderButtons from '../components/Buttons';

function RecordVideo(props) {
    const recordWebcam = useRecordWebcam({ frameRate: 60 });

    const saveFile = async () => {
        const blob = await recordWebcam.getRecording();
    };
    const [recording, setrecording] = useState(true)
    const [firstStart, setfirststart] = useState(true)
    function onRecord() {

        recordWebcam.start()

    }

    function onRecordStop() {
        setrecording(false)
        recordWebcam.stop()
    }

    function onRecordRetake() {
        setrecording(true)
        recordWebcam.retake()
    }
    //recordWebcam.open()
    return (
        <div>
            <p>Camera status: {recordWebcam.status}</p>

            {/* <button onClick={recordWebcam.open}>Open camera</button>
      <button onClick={onRecord}>Start recording</button>
      <button onClick={onRecordStop}>Stop recording</button>
      <button onClick={onRecordRetake}>Retake recording</button>
      <button onClick={recordWebcam.download}>Download recording</button>
      <button onClick={saveFile}>Save file to server</button> */}
            <RenderButtons recordWebcam={recordWebcam} setrecording={setrecording} saveFile={saveFile} />
            <h3> Why do you want to work at apple? </h3>

            {recording && <video ref={recordWebcam.webcamRef} autoPlay />}
            {!recording && <video ref={recordWebcam.previewRef} autoPlay loop controls />}

        </div>
    )
}


export default RecordVideo