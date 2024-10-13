import { useState, useEffect } from "react";

export const useElementWidthById = (container: string) => {
    const [emWidth, setEmWidth] = useState(0);
    const setObserver = () => {
        let em = document.getElementById(container)
        if (!em) {
            return;
        }
        let observer = new ResizeObserver((e) => {
            if (e[0]?.contentRect?.width) {
                setEmWidth(e[0].contentRect.width);
            }
        });
        observer.observe(em);
        return observer;
    };

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }
        let observer = setObserver();
        return () => {
            observer?.disconnect();
        };
    }, []);
    return emWidth;
};
