"use client"
import { htmlEm } from '@ulld/state/actions/clientOnly/dom'
import { useEffect } from 'react'


const OnlineStatusObserver = () => {

    const setOnlineStatusCookie = async (online: boolean) => {
        await fetch("/api/utils/getOnlineStatusCookie", {
            method: "POST",
            body: JSON.stringify({
                online: online
            })
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
