"use client";
import React, { useEffect } from "react";
import { applyMathjaxBandaid } from "@ulld/parsers/applyMathjaxBandaid";

export const useMathjaxBandaid = (
    element: string | React.RefObject<HTMLElement>,
) => {
    useEffect(() => {
        const observer = applyMathjaxBandaid(element);
        console.log("element.current: ", element.current)
        console.log("observer: ", observer)
        return () => {
            if (observer && "disconnect" in observer) {
                observer?.disconnect();
            }
        };
    }, [element]);
};
