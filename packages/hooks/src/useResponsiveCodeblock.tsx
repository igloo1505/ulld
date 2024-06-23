import { useEffect, useRef } from "react";
import { useObserveChildren } from "./useObserveChildren";

interface Opts {
    defaultMaxWidth?: string;
    padding?: number;
    maxWidth?: string;
    nested?: boolean;
}

export const useResponsiveCode = <T extends HTMLElement>(
    {
        defaultMaxWidth = "40vw",
        padding = 32,
        maxWidth = "40vw",
        nested,
    }: Opts = {
            defaultMaxWidth: "40vw",
            padding: 32,
        },
) => {
    const ref = useRef<T>(null!);
    /* const [maxWidth, _setMaxWidth] = useState<undefined | string>(undefined) */

    const getMaxWidth = (): string => {
        if (ref && "current" in ref) {
            let rect = ref.current?.getBoundingClientRect();
            if (rect) {
                return `${Math.floor(rect.width - padding)}px`;
            }
        }
        return defaultMaxWidth;
    };

    const setMaxWidth = (mw?: string) => {
        let newMaxWidth = mw ? mw : getMaxWidth();
        if (newMaxWidth && ref && "current" in ref) {
            let ems = nested
                ? ref.current.querySelectorAll(
                    "figure[data-rehype-pretty-code-figure] .line",
                )
                : ref.current?.querySelectorAll(".line");
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

    useEffect(() => {
        let mw = maxWidth ? maxWidth : getMaxWidth();
        setMaxWidth(mw);
    }, [maxWidth]);

    useObserveChildren(
        () => setMaxWidth(),
        {
            once: true,
        },
        ref,
    );

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return {
        /* setMaxWidth: _setMaxWidth, */
        ref,
    };
};
