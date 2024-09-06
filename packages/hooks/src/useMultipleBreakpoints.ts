"use client"
import { useMemo, useState } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicEffect";

export const useMultipleBreakpoints = <T extends unknown>(
    breakPoints: Record<`${number}`, T>,
    target?: HTMLElement,
) => {
    const [value, setValue] = useState<T | null>(null);

    const em = useMemo(() => (target ? target : document.body), [target]);

    const sortedBps = useMemo((): {
            width: number
            value: T
        }[] => {
        return Object.keys(breakPoints).map((k) => {
            let nk = parseFloat(k)
            return {
                width: nk,
                value: breakPoints[k as keyof typeof breakPoints]
            }
            /** small to large... I hope */
        }).sort((a, b) => a.width - b.width)
    }, [breakPoints])

    const handleBreakpoints = (w: number) => { 
        let bp = sortedBps.find((x) => x.width >= w)
        setValue(bp ? bp.value : null)
    };

    const handleResize = () => {
        if (!em) return;
        let rect = em.getBoundingClientRect();
        handleBreakpoints(rect.width);
    };

    useIsomorphicLayoutEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return value
};
