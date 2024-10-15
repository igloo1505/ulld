"use client"
import React from "react";
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
    // TODO: Keep attributes field but make others dependent on a prop.
     observer.observe(em, {
        subtree: true, // Modifications to child nodes. Only has an effect if childList is true.
        childList: true, // Addition and removal of child nodes.
        attributes: true, // Just added (10-15-24). Make sure this doesn't cause any issues. attributeFilter was already present, but shouldn't have any effect unless attributes is also true.
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
