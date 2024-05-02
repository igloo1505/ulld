"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface NavbarPortalProps {
    children: React.ReactNode;
}

export const NavbarPortal = ({ children }: NavbarPortalProps) => {

    const [element, setElement] = useState<HTMLElement | null>(null);

    useEffect(() => {
        let em = document.getElementById("navbar-target");
        if (em) {
            setElement(em);
        }
    }, []);

    return element ? createPortal(children, element) : null;
};

NavbarPortal.displayName = "NavbarPortal";
