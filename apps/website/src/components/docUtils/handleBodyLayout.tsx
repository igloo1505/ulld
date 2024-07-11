"use client";
import { pathIsMdxContent } from "#/fumaDocs/utils/pathIsMdxContent";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface HandleBodyDisplayProps { }


export const HandleBodyDisplay = (props: HandleBodyDisplayProps) => {
    const pathname = usePathname();
    useEffect(() => {
        let em = document.querySelector("body");
        if (pathIsMdxContent(pathname)) {
            em?.setAttribute("data-disContents", "true");
        } else {
            em?.removeAttribute("data-disContents");
        }
    }, [pathname]);
    return null;
};

HandleBodyDisplay.displayName = "HandleBodyDisplay";
