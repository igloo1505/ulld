"use client"
import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface MobileSheetPortalProps {
    children: ReactNode;
}

export const MobileSheetPortal = ({ children }: MobileSheetPortalProps) => {
    let em = document.querySelector("body");
    if (!em) return null;
    return createPortal(children, em);
};

MobileSheetPortal.displayName = "MobileSheetPortal";
