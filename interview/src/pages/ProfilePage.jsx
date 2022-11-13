import { async } from "@firebase/util"
import React from "react"
import { useState } from "react"
import { query } from "firebase/firestore"
import { getDownloadURL, ref, getStorage } from "firebase/storage"
import { addDoc, collection, doc, FieldValue, Firestore, getDoc, getDocs, getFirestore, setDoc, where } from "firebase/firestore"
import { useRef } from "react"
import { useEffect } from "react"
import Vidview from "../components/Vidview"
function ProfilePage({ app }) {
    const [userdata, setuserdata] = useState()
    const [urls, seturls] = useState()
    const db = getFirestore(app)
    const storage = getStorage()
    let first = true

    // function retrievevid(storage, data) {

    //     const url = await getDownloadURL(ref(storage, data))
    //     return <video src={url}></video>
    // }
    async function getuserdata(name) {
        const q = query(collection(db, "users"), where("username", "==", `${name}`))
        const qsnapshot = await getDocs(q)


        const userref = doc(db, `users/${qsnapshot.docs[0].id}`)
        const userobj = await getDoc(userref)
        const userdata = userobj.data()
        return userdata
    }
    async function getviddata(link) {
        const vidref = doc(db, `${link}`)
        const vidobj = await getDoc(vidref)
        return vidobj.data()

    }

    async function filloutarr(userdata) {
        let arr = []
        for (let i = 0; i < userdata.videos.length; i++) {
            let url = await getviddata(userdata.videos[i])
            arr.push(url)
            console.log(url);
        }
        return arr
    }
    if (userdata == undefined) {

        getuserdata("Bee").then(data => {
            setuserdata(data)
            // console.log(data);

            filloutarr(data).then(arr => {
                seturls(arr)
                // console.log(urls);
            })
        })
    }


    return (<div>
        {userdata != undefined && urls != undefined && urls.map(vid => <Vidview key={vid.link} vid={vid} />)}
    </div>)
}

export default ProfilePage 