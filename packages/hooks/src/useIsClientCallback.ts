import { useEffect, useRef } from "react";
import { useIsClient } from "./useIsClient";

export const useIsClientCallback = (cb: () => void) => {
    let isClient = useIsClient();
    const hasRan = useRef(false);

    useEffect(() => {
        if (hasRan.current) {
            return;
        }
        if (isClient) {
            cb();
            hasRan.current = true;
        }
    }, [isClient]);
};
