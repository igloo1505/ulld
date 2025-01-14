"use client";
import { htmlEm } from "../actions/clientOnly/dom";
import { useEffect } from "react";

interface OnlineStatusObserverProps { 
   ignoreOnlineStatus?: boolean
}

export const OnlineStatusObserver = ({ignoreOnlineStatus}: OnlineStatusObserverProps) => {

    const setOnlineStatusCookie = async (online: boolean) => {
        if(ignoreOnlineStatus) {
            return
        }
        await fetch("/api/utils/getOnlineStatusCookie", {
            method: "POST",
            body: JSON.stringify({
                online: online
            })
        })
    };
    const setStatus = () => {
        htmlEm()?.classList[navigator?.onLine ? "remove" : "add"]("isOffline");
        setOnlineStatusCookie(navigator.onLine);
    };

    useEffect(() => {
        window.addEventListener("online", setStatus);
        window.addEventListener("offline", setStatus);
        setStatus();
        return () => {
            window.removeEventListener("online", setStatus);
            window.removeEventListener("offline", setStatus);
        };
    }, []);
    return null;
};

OnlineStatusObserver.displayName = "OnlineStatusObserver";
