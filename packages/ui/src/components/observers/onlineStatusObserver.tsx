"use client"
import { htmlEm } from '@ulld/state'
import axios from 'axios'
import { useEffect } from 'react'



const OnlineStatusObserver = () => {

    const setOnlineStatusCookie = async (online: boolean) => {
        await axios.post("/api/utils/getOnlineStatusCookie", {
            online
        })
    }

    useEffect(() => {
        const setStatus = () => {
            htmlEm()?.classList[navigator?.onLine ? "remove" : "add"]("isOffline")
            setOnlineStatusCookie(navigator.onLine)
        }
        window.addEventListener("online", setStatus);
        window.addEventListener("offline", setStatus);
        setStatus()
        return () => {
            window.removeEventListener("online", setStatus);
            window.removeEventListener("offline", setStatus);
        };
    }, [])
    return null
}


OnlineStatusObserver.displayName = "OnlineStatusObserver"


export default OnlineStatusObserver;
