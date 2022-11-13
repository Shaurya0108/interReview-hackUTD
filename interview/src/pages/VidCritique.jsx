import React from "react";
import { useState } from "react";

function VidCritique({ prompt, videos }) {
    const [index, setIndex] = useState(0)
    const vidList = videos
    const [viewed, setviewed] = useState(true)
    const [critique, updateCritique] = useState("")

    function sendtodb(obj) {
        //send to db somehow
        if (index < vidList.length()) {
            setIndex(index + 1)
        } else {
            //reroute
        }
    }
    return (<div>
        <h1>{prompt}</h1>
        <video controls onEnded={() => { setviewed(true) }} />
        {viewed && <CritiqueForm critiqueText={critique} updateCritiqueText={updateCritique} sendToDB={sendtodb} />}

    </div>)
}

function CritiqueForm({ critiqueText, updateCritiqueText, sendToDB }) {
    function updateText(event) {
        updateCritiqueText(event.target.value)
    }
    function thumbsUp(params) {
        const obj = {}
        sendToDB(obj)
    }
    function thumbsDown(params) {
        const obj = {}
        sendToDB(obj)
    }

    return (
        <form action="POST">
            <label>
                <h1>Your critique</h1>
            </label>
            <textarea name="critique" id="critique" cols="30" rows="10" onChange={updateText}></textarea>
            <br></br>
            <input type="submit" value="Thumbs up" onSubmit={thumbsUp} />
            <input type="submit" value="Thumbs down" onSubmit={thumbsDown} />
        </form >
    )
}
export default VidCritique