import React from "react";
import { RingLoader } from "react-spinners";
import { cn } from "@ulld/utilities/cn"

export const EmbeddedLoadingIndicator = ({className, containerClassName, size}: {className?: string, containerClassName?: string, size?: string | number}) => {
    return (
        <div
            className={
                cn("absolute w-full h-full flex flex-col justify-center items-center", containerClassName)
            }
        >
            <RingLoader
                size={`${size || 200}`}
                color="hsl(var(--primary))"
                className={className}
            />
        </div>
    );
};

EmbeddedLoadingIndicator.displayName = "EmbeddedLoadingIndicator";
