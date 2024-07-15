"use client";
import React from "react";
import clsx from "clsx";
import { PropagateLoader } from "react-spinners";
import { LoadingIndicatorProps } from "../../../types/general";

const LoaderComponent = ({ loading, size = 100 }: LoadingIndicatorProps) => {
    return (
        <PropagateLoader
            size={size}
            color="hsl(var(--primary))"
            loading={loading}
        />
    );
};

export const LoadingIndicatorScreen = (props: LoadingIndicatorProps) => {
    return (
        <div
            className={clsx(
                "w-screen h-screen top-0 left-0 fixed flex flex-col gap-4 justify-center items-center z-[99999] overflow-hidden transition-all duration-300",
                props.loading ? "scale-1" : "scale-0",
            )}
        >
            {props.label && <div className={"text-4xl"}>{props.label}</div>}
            <LoaderComponent {...props} />
        </div>
    );
};

export const LoadingIndicator = (props: LoadingIndicatorProps) => {
    if (props.fullScreen) {
        return <LoadingIndicatorScreen {...props} />;
    }
    return <LoaderComponent {...props} />;
};

LoadingIndicator.displayName = "LoadingIndicator";

export default LoadingIndicator;
