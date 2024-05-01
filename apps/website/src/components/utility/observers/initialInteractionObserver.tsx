"use client";
import { useEffect } from "react";
import { useLocalStorage } from "@ulld/hooks/useLocalStorage";
import { setModalState } from "#/state/actions/interactions";

const sponsorReqDelay = 180000;

interface InitialInteractionObserverProps { }


/* TODO: Move this over to a time delayed function after a user has scrolled a fair bit. Using this for development right now. */

const InitialInteractionObserver = (props: InitialInteractionObserverProps) => {
    const [hasShown, setHasShown]: [boolean | string, (val: boolean) => void] =
        useLocalStorage("have-begged-for-sponsorship", false, {
            deserializer: (val) => val === "true",
        });
    const showLaunchSponsorReq = () => {
        setModalState("launchSponsorRequest", true);
        setHasShown(true);
    };
    useEffect(() => {
        let showOn = window.localStorage.getItem("show-spon-req-at");
        console.log("hasShown: ", hasShown);
        if (!hasShown) {
            if (showOn) {
                const shouldShow = parseInt(showOn) < Date.now();
                console.log("shouldShow: ", shouldShow);
                if (shouldShow) {
                    showLaunchSponsorReq();
                }
            }
            window.localStorage.setItem(
                "show-spon-req-at",
                `${Date.now() + sponsorReqDelay}`,
            );
            setTimeout(showLaunchSponsorReq, sponsorReqDelay);
        }
    }, []);
    return null;
};

InitialInteractionObserver.displayName = "InitialInteractionObserver";

export default InitialInteractionObserver;
