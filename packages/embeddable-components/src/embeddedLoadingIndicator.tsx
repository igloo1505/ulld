"use client"
import React from "react";
import { RingLoader } from "react-spinners";
import { cn } from "@ulld/utilities/cn"

/* BUG: "use client" is only here to address table ssr issue with error related to passing a function or class to a client component. If this is not the cause, remove the 'use client' directive. */
export const EmbeddedLoadingIndicator = ({className, containerClassName, size}: {className?: string, containerClassName?: string, size?: string | number}) => {
    return (
        <div
            className={
                cn("absolute w-full h-full flex flex-col justify-center items-center", containerClassName)
            }
        >
            <RingLoader
                size={`${size || 200}px`}
                color="hsl(var(--primary))"
                className={className}
            />
        </div>
    );
};

EmbeddedLoadingIndicator.displayName = "EmbeddedLoadingIndicator";
