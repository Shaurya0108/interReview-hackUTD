
function Vidview({ vid }) {
    return <div >
        <h1>{vid.prompt}</h1>
        <video src={vid.link} controls></video>
        {vid.reviews.map(data => <p key={data}> From: {data.from} | Review: {data.review} | Positive review? {data.positive ? "True" : "False"}</p>)}
    </div>

}

export default Vidview