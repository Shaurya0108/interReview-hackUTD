import React from "react";

function RenderButtons({ recordWebcam, setrecording, saveFile }) {
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
    switch (recordWebcam.status) {
        case "OPEN":
            return (
                <div>
                    <button onClick={onRecord}>Start recording</button>
                </div>
            )
        case "RECORDING":
            return (<div>
                <button onClick={onRecordStop}>Stop recording</button>
            </div>)
        case "PREVIEW":
            return (<div>
                <button onClick={onRecordRetake}>Retake recording</button>
                <button onClick={recordWebcam.download}>Download recording</button>
                <button onClick={saveFile}>Save file to server</button>
            </div>)
        case "ERROR":
            return (<div>
                <div>
                    <button onClick={recordWebcam.open}>Reset</button>
                </div>
            </div>)
        case "CLOSED":
            return (
                (<div>
                    <div>
                        <button onClick={recordWebcam.open}>Begin</button>
                    </div>
                </div>)
            )
        default:
            return (
                <p></p>
            );
    }
}

export default RenderButtons