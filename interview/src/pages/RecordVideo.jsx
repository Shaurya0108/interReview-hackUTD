import '../App.css';
import { useRecordWebcam, WebcamStatus } from 'react-record-webcam'
import { useState } from 'react';
import "../components/Buttons"
import RenderButtons from '../components/Buttons';
import { getStorage, ref, uploadBytes } from "firebase/storage"
import { addDoc, collection, doc, Firestore, getDoc, getFirestore, setDoc } from "firebase/firestore"

function RecordVideo({ app }) {
    const recordWebcam = useRecordWebcam({ frameRate: 60 });
    const db = getFirestore(app)
    const saveFile = async () => {
        const storage = getStorage()
        const blob = await recordWebcam.getRecording();
       
        const docu = {
            prompt: "Why do you want to work at apple",
            link: `videos/link`,
            reviews: [""],
            user: "Bee"
        }
        console.log(db);
        const docRef = await addDoc(collection(db, "videos"), docu);
        const storageRef = ref(storage, `videos/${docRef.id}`)
        uploadBytes(storageRef, blob).then((result) => console.log("Success"));
        docu.link = `videos/${docRef.id}`
        await setDoc(docRef, docu)
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