"use client";
import React, { RefObject, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import clsx from "clsx";

interface PopoverBtnIndicatorProps {
    dir: "up" | "down";
    container: RefObject<HTMLDivElement>;
    threshold?: number;
    ready: boolean;
}

const PopoverBtnIndicator = ({
    dir,
    container,
    threshold = 10,
    ready,
}: PopoverBtnIndicatorProps) => {
    const [show, setShow] = useState(false);

    const watchScroll = () => {
        if (container.current?.scrollHeight === container.current?.clientHeight)
            return setShow(false);
        let shouldShow = false;
        if (dir === "up") {
            shouldShow = Boolean(
                typeof container.current?.scrollTop === "number" &&
                container.current?.scrollTop >= threshold,
            );
        } else {
            shouldShow = Boolean(
                typeof container.current?.scrollTop === "number" &&
                typeof container.current?.clientHeight === "number" &&
                container.current.scrollTop <=
                container.current.scrollHeight -
                container.current?.clientHeight -
                threshold,
            );
        }
        setShow(shouldShow);
    };

    useEffect(() => {
        console.log("ready: ", ready)
        if (ready) {
            watchScroll();
            container.current?.addEventListener("scroll", watchScroll);
        }
    }, [ready]);

    return (
        <motion.div
            className={clsx(
                "w-full z-10 bg-secondary sticky flex flex-row justify-center items-center opacity-0",
                dir === "up" ? "inset-top top-0" : "inset-bottom bottom-0",
            )}
            initial={"hide"}
            animate={show ? "show" : "hide"}
            variants={{
                show: {
                    opacity: 1,
                    scaleY: 1,
                },
                hide: {
                    opacity: 0,
                    scaleY: 0,
                },
            }}
        >
            <ChevronUp
                className={clsx(
                    "h-3 w-3 text-secondary-foreground",
                    dir === "down" && "rotate-180",
                )}
            />
        </motion.div>
    );
};

PopoverBtnIndicator.displayName = "PopoverBtnIndicator";

export default PopoverBtnIndicator;
