"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface GlobalStatePortalProps {
    children?: React.ReactNode;
}

export const GlobalStatePortal = ({ children }: GlobalStatePortalProps) => {

    const [element, setElement] = useState<HTMLElement | null>(null);

    useEffect(() => {
        let em = document.getElementById("global-state-target");
        if (em) {
            setElement(em);
        }
    }, []);
    if(!children) return null

    return element ? createPortal(children, element) : null;
};

GlobalStatePortal.displayName = "GlobalStatePortal";
