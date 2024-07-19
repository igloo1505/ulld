"use client";
import { motion } from "framer-motion";
import { XIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";


export const BetaBanner = () => {
    const ref = useRef<HTMLDivElement>(null!);
    const [show, setShow] = useState(false)
    useEffect(() => {
        let hasShown = window.localStorage.getItem("ulld-beta-banner")
        if(!hasShown || (hasShown && new Date().valueOf() > (parseInt(hasShown) + 86400000))){
            setShow(true)
        }
        window.localStorage.setItem("ulld-beta-banner", `${new Date().valueOf()}`)
    }, [])

    return (
        <motion.div
            ref={ref}
            id="beta-banner"
            className={
                "not-prose fixed top-0 left-0 w-screen h-fit p-4 rounded bg-primary text-primary-foreground text-center z-[999]"
            }
            initial="hide"
            animate={show ? "show" : "hide"}
            variants={{
                show: {
                    y: 0,
                    opacity: 1
                },
                hide: {
                    y: -100,
                    opacity: 0,
                }
            }}
        >
            <XIcon
                className={"text-primary-foreground w-4 h-4 cursor-pointer inline-block absolute left-4 top-[1.2rem]"}
                onClick={() => {
                    setShow(false)
                }}
            />
            <span className={"px-10 text-sm sm:text-base"}>
            This app is currently in beta. Please explore the docs, but be sure to check back
            often. The build script will be wrapping up this month, July of 2024.
            </span>
        </motion.div>
    );
};

BetaBanner.displayName = "BetaBanner";
