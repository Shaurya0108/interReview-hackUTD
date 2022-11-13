import '../App.css';
import { useRecordWebcam, WebcamStatus } from 'react-record-webcam'
import { useState } from 'react';
import "../components/Buttons"
import RenderButtons from '../components/Buttons';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import { addDoc, collection, doc, FieldValue, Firestore, getDoc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore"
import { async } from '@firebase/util';

function RecordVideo({ app }) {

    const recordWebcam = useRecordWebcam({ frameRate: 60 });
    const db = getFirestore(app)
    async function getuserdata(name) {
        const q = query(collection(db, "users"), where("username", "==", `${name}`))
        const qsnapshot = await getDocs(q)


        const userref = doc(db, `users/${qsnapshot.docs[0].id}`)
        const userobj = await getDoc(userref)
        const userdata = userobj.data()
        return userdata
    }
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
        await uploadBytes(storageRef, blob).then((result) => console.log("Success"));
        docu.link = await getDownloadURL(storageRef)
        await setDoc(docRef, docu)

        //create link between user and prompts


        const q = query(collection(db, "users"), where("username", "==", `Bee`))
        const qsnapshot = await getDocs(q)


        const userref = doc(db, `users/${qsnapshot.docs[0].id}`)
        const userobj = await getDoc(userref)
        const userdata = userobj.data()

        userdata.videos.push(`videos/${docRef.id}`)
        setDoc(userref, userdata)

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