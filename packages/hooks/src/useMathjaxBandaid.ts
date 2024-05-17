"use client";
import React, { ForwardedRef, useEffect } from "react";
import { applyMathjaxBandaid } from "@ulld/parsers/applyMathjaxBandaid";

export const useMathjaxBandaid = (
    element: string | React.RefObject<HTMLElement>
) => {
    useEffect(() => {
        const observer = applyMathjaxBandaid(element);
        console.log("observer: ", observer)
        return () => {
            if (observer && "disconnect" in observer) {
                observer?.disconnect();
            }
        };
    }, [element]);
};
