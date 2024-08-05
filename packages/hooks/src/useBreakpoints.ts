"use client"
import { useEffect, useMemo, useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicEffect";

interface Options {
   containerId?: string
}

type BreakPointRecord = Record<string, number>;


type BreakPointResult<T extends BreakPointRecord> = Record<keyof T, boolean> | null


export const useBreakPoints = <T extends BreakPointRecord>(breakPoints: T, dir: "minWidth" | "maxWidth" = "minWidth", opts: Options) => {

    const [breakPointData, setBreakPointData] = useState<BreakPointResult<T>>(null)

    let em = useRef<HTMLElement | null>(null)

    useEffect(() => {
      if(opts.containerId){
            em.current = document.getElementById(opts.containerId)
        }
    }, [opts])
    

    const getContainerWidth = () => {
            return em.current ? em.current.getBoundingClientRect().width : window.innerWidth
        }

    const handleResize = () => { 
        let data = {} as NonNullable<BreakPointResult<T>>
        let w = getContainerWidth()
        for (const k in breakPoints) {
            data[k] = dir === "minWidth" ? w >= breakPoints[k] : w <= breakPoints[k]
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
