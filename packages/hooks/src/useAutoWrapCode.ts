import { useEffect, useRef } from "react";
import { useObserveChildren } from "./useObserveChildren";

interface Props {
    maxWidth?: string;
}

export const useAutoWrapCode = ({ maxWidth: mw }: Props = {}) => {
    const ref = useRef<HTMLElement>(null!);
    const maxWidth = useRef(mw);

    const getTargets = () => {
        if(!ref.current) return [] as HTMLElement[]
        return ref.current.querySelectorAll("code");
    };
    const getMaxWidth = (target: HTMLElement): string => {
            let rect = target.getBoundingClientRect();
            if (rect) {
                return `${Math.floor(rect.width - 32)}px`;
            }
        return "40vw";
    };

    const setMaxWidth = (isResize?: boolean) => {
        if(!ref.current) return
        for (const k of ref.current.querySelectorAll("code")) {
            let newMaxWidth = isResize ? getMaxWidth(k) : maxWidth.current;
            if (newMaxWidth) {
                let targets = getTargets();
                for (const k of targets) {
                    let ems = k.querySelectorAll(".line");
                    ems?.forEach((a) => {
                        if ("style" in a) {
                            /* @ts-ignore */
                            a.style.maxWidth = newMaxWidth;
                        }
                    });
                }
            }
        }
    };

    const handleResize = () => {
        setMaxWidth(true);
    };

    useObserveChildren(
        () => setMaxWidth(),
        {
            once: true,
        },
        ref,
    );

    useEffect(() => {
        maxWidth.current = mw;
        setMaxWidth();
    }, [mw]);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return ref;
};
