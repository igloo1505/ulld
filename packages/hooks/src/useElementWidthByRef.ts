import { RefObject, useState, useEffect } from "react";

export const useElementWidthByRef = (container: RefObject<HTMLElement>) => {
    const [emWidth, setEmWidth] = useState(0);
    const setObserver = () => {
        if (!container.current) {
            return;
        }
        let observer = new ResizeObserver((e) => {
            if (e[0]?.contentRect?.width) {
                setEmWidth(e[0].contentRect.width);
            }
        });
        observer.observe(container.current);
        return observer;
    };

    useEffect(() => {
        if (!container.current) {
            return;
        }
        let observer = setObserver();
        return () => {
            observer?.disconnect();
        };
    }, []);
    return emWidth;
};
