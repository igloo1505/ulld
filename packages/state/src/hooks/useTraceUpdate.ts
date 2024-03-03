import { useRef, useEffect } from "react";

export const useTraceUpdate = <T extends object>(props: T) => {
    const prev = useRef<T>(props);
    useEffect(() => {
        const changedProps = Object.entries(props).reduce((ps, [k, v]) => {
            /* @ts-ignore */
            if (prev.current[k as any] !== v) {
                /* @ts-ignore */
                ps[k as any] = [prev.current[k as any], v];
            }
            return ps;
        }, {});
        if (Object.keys(changedProps).length > 0) {
            console.log('Changed props:', changedProps);
        }
        prev.current = props;
    });
}
