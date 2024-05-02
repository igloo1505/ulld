"use client";
import axios from "axios";
import { htmlEm } from "../actions/clientOnly/dom";
import { useEffect } from "react";

interface OnlineStatusObserverProps { 

}

export const OnlineStatusObserver = (props: OnlineStatusObserverProps) => {

    const setOnlineStatusCookie = async (online: boolean) => {
        await axios.post("/api/utils/getOnlineStatusCookie", {
            online,
        });
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
