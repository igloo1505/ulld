"use client"
import React from "react";
import clsx from "clsx";
import { useViewport } from "@ulld/hooks/useViewport";

interface LogoAsTextProps {
    fontSize?: number | "h1";
    className?: string;
}

export const LogoAsText = ({ fontSize = 16, className }: LogoAsTextProps) => {
    const vp = useViewport()
    if(fontSize === "h1"){
        let vw = vp?.window.width
        fontSize = vw ? vw >= 1024 ? 48 : 36 : 48
    }
    return (
        <span
            className={clsx("inline-block w-fit leading-none font-semibold", className)}
        >
            <span
                className={"text-brand !inline-block"}
                style={{
                    transform: `translateY(${fontSize * 0.25}px)`,
                    fontSize: `${fontSize * 1.5}px`,
                }}
            >
                U
            </span>
            <span
                className={"inline-block text-foreground"}
                style={{
                    fontSize: `${fontSize}px`,
                }}
            >
                LLD
            </span>
        </span>
    );
};

LogoAsText.displayName = "LogoAsText";
