import {
    MutableRefObject,
    RefObject,
    useEffect,
    useRef,
    useState,
} from "react";

export const useMeasure = <T extends Element>(providedRef?: RefObject<T>) => {
    const ref = useRef<T>(null!);
    const [rect, setRect] = useState<DOMRect | null | undefined>(null);
    let t = providedRef ? providedRef : ref;
    useEffect(() => {
        let rs = new ResizeObserver(() => {
            setRect(t.current?.getBoundingClientRect());
        });
        if (t.current) {
            rs.observe(t.current);
        }
        return () => rs.disconnect();
    }, []);
    return [t, rect] as [MutableRefObject<T>, DOMRect];
};
