import { collection, doc, Firestore, getDoc, limit, query, getDocs, getFirestore, setDoc } from "firebase/firestore";
import React from "react";
import { useState } from "react";

function VidCritique({ app }) {
    const [index, setIndex] = useState(0)
    const [first, setfirst] = useState(true)
    const [vidList, setVidList] = useState([])
    const [viewed, setviewed] = useState(true)
    const [critique, updateCritique] = useState("")
    const db = getFirestore(app)
    async function sendtodb(obj) {
        //send to db somehow
        if (index < vidList.length) {
            if (index !== vidList.length - 1)
                setIndex(index + 1)


            obj.from = "anonymous"
            const docu = doc(db, `videos/${vidList[index].id}`)
            const docuobj = await getDoc(docu)
            const vidData = docuobj.data()

            vidData.reviews.push(obj)

            setDoc(docu, vidData)

        } else {
            //reroute
        }
    }


    //perform a query

    async function getviddata() {

        const q = query(collection(db, "videos"), limit(5))
        const docs = await getDocs(q)
        const docu = docs.docs.map(document => {
            const stuff = document.data()
            stuff.id = document.id
            return stuff
        })
        setVidList(docu)
        console.log(docu);

    }
    if (first) {
        getviddata()
        setfirst(false)

    }

    return (<div>
        <h1>Prompt: {vidList.length == 0 ? "Prompt" : vidList[index].prompt}</h1>
        <h1>User is {vidList.length == 0 ? "Name" : vidList[index].user}</h1>
        <video controls src={vidList.length == 0 ? "" : vidList[index].link} onEnded={() => { setviewed(true) }} />
        {viewed && <CritiqueForm critiqueText={critique} updateCritiqueText={updateCritique} sendToDB={sendtodb} />}

    </div>)
}

function CritiqueForm({ critiqueText, updateCritiqueText, sendToDB }) {
    function updateText(event) {
        updateCritiqueText(event.target.value)
    }
    function thumbsUp(params) {
        const obj = { positive: true, review: params }
        sendToDB(obj)
    }
    function thumbsDown(params) {
        const obj = { positive: false, review: params }
        sendToDB(obj)
    }

    return (
        <div>
            <form action="POST">
                <label>
                    <h1>Your critique</h1>
                </label>
                <textarea name="critique" id="critique" cols="30" rows="10" onChange={updateText}></textarea>
                <br></br>

            </form >
            <button onClick={() => { thumbsUp(critiqueText) }}>Thumbs up</button>
            <button onClick={() => { thumbsDown(critiqueText) }}>Thumsbs down</button>
        </div>
    )
}
export default VidCritique