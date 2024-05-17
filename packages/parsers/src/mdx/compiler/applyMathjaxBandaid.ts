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
