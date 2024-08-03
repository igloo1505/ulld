"use client"
import { useState } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicEffect";


type BreakPointRecord = Record<string, number>;


type BreakPointResult<T extends BreakPointRecord> = Record<keyof T, boolean> | null


export const useBreakPoints = <T extends BreakPointRecord>(breakPoints: T, dir: "minWidth" | "maxWidth" = "minWidth") => {
    const [breakPointData, setBreakPointData] = useState<BreakPointResult<T>>(null)

    const handleResize = () => { 
        let data = {} as NonNullable<BreakPointResult<T>>
        for (const k in breakPoints) {
            data[k] = dir === "minWidth" ? window.innerWidth >= breakPoints[k] : window.innerWidth <= breakPoints[k]
        }
        setBreakPointData(data)
    };

    useIsomorphicLayoutEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return breakPointData
};
