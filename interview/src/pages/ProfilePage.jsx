import { async } from "@firebase/util"
import { query } from "firebase/firestore"
import { getDownloadURL, ref, getStorage } from "firebase/storage"

function ProfilePage({ userdata }) {
    const storage = getStorage()
    async function retrievevid(data, storage) {
        const url = await getDownloadURL(ref(storage, data))
        return <video src={url}></video>
    }
    return (<div>
        {
            userdata.videos.map(async data => { await retrievevid(userdata, storage) })}
    </div>)
}

export default ProfilePage 