import { useEffect, useRef } from "react";

export const useObserveChildren = <T extends HTMLElement>(
    cb: () => void,
    opts?: MutationObserverInit,
) => {
    const ref = useRef<T>(null!);
    const o = useRef<MutationObserver>(null!);
    useEffect(() => {
        let observer = new MutationObserver(cb);
        o.current = observer;
        observer.observe(ref.current, {
            childList: true,
            ...opts,
        });
        return () => {
            if (o.current) {
                o.current.disconnect();
            }
        };
    }, []);
    return ref;
};
