import React, { HTMLProps, useEffect, useRef } from "react";
import { useObserveChildren } from "@ulld/hooks/useObserveChildren";

interface WrapCodeProps extends HTMLProps<HTMLDivElement> {
    maxWidth?: string;
}

export const AutoWrapCode = ({ maxWidth, ...props }: WrapCodeProps) => {
    const ref = useRef<HTMLDivElement>(null!);
    const getMaxWidth = (): string => {
        if (ref && "current" in ref) {
            let rect = ref.current?.getBoundingClientRect();
            if (rect) {
                return `${Math.floor(rect.width - 32)}px`;
            }
        }
        return "40vw";
    };

    const setMaxWidth = (mw?: string) => {
        let newMaxWidth = mw ? mw : getMaxWidth();
        if (newMaxWidth && ref && "current" in ref) {
            let ems = ref.current?.querySelectorAll(".line");
            ems?.forEach((a) => {
                if ("style" in a) {
                    /* @ts-ignore */
                    a.style.maxWidth = newMaxWidth;
                }
            });
        }
    };

    const handleResize = () => {
        setMaxWidth();
    };

    useObserveChildren(
        () => setMaxWidth(),
        {
            once: true,
        },
        ref,
    );

    useEffect(() => {
        let mw = maxWidth ? maxWidth : getMaxWidth();
        console.log("mw: ", mw);
        setMaxWidth(mw);
    }, [maxWidth]);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            className={
                "w-full max-w-full h-full max-h-full overflow-y-auto block not-prose [&_pre]:max-w-full py-6 pr-4 pl-6 text-sm [&_code]:max-w-full [&_code]:min-w-full [&_code]:whitespace-break-spaces [&_.line]:min-h-4 [&_code]:!bg-background no-scrollbar"
            }
            {...props}
            ref={ref}
        />
    );
};

AutoWrapCode.displayName = "AutoWrapCode";
