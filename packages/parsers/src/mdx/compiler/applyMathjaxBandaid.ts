"use client"
import React, { ForwardedRef } from "react";
import { mathjaxMutationObserver } from "./mdxClassnameBandaid";

export const applyMathjaxBandaid = (
    element: string | React.RefObject<HTMLElement>
) => {
    let em =
        typeof element === "string"
            ? document.getElementById(element)
            : element.current;
    if (!em) return;
    let observer = mathjaxMutationObserver()
    // WITH_WIFI: Improve this SIGNIFICANTLY. Look up the necessary properties to find just the classname attribute that's applied mistakenly by the parser.
     observer.observe(em, {
        subtree: true,
        childList: true,
        attributeFilter: [
            "classname"
        ]
    });
    em.querySelectorAll("[classname]").forEach((el) => {
        el.classList.value = el.getAttribute("classname") || ""
        el.removeAttribute("classname")
    })
    return observer
};
