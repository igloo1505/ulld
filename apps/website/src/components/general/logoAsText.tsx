import React from "react";
import clsx from "clsx";

interface LogoAsTextProps {
    fontSize?: number;
    className?: string;
}

export const LogoAsText = ({ fontSize = 16, className }: LogoAsTextProps) => {
    return (
        <span
            className={clsx("inline-block w-fit leading-none font-semibold", className)}
        >
            <span
                className={"text-brand inline-block"}
                style={{
                    transform: `translateY(${fontSize * 0.25}px)`,
                    fontSize: `${fontSize * 1.5}px`,
                }}
            >
                U
            </span>
            <span
                className={"inline-block"}
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
