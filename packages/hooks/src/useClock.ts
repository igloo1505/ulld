import { useEffect, useRef, useState } from "react";

export const useClock = (
    formatter: (d: Date) => string,
    tic: "second" | "minute" = "second",
) => {
    let now = new Date();
    let formatted = formatter(now);
    let timer = useRef<NodeJS.Timeout | null>(null);
    const seconds = useRef(now.getSeconds());
    const [time, setTime] = useState({
        formatted,
        date: now,
    });

    useEffect(() => {
        timer.current = setInterval(() => {
            let d = new Date();
            if (tic === "second" || seconds.current === 0) {
                setTime({
                    date: d,
                    formatted: formatter(d),
                });
            }
            seconds.current = seconds.current >= 59 ? 0 : seconds.current + 1
        }, 1000);

        return () => {
            if(timer.current){
                clearInterval(timer.current)
            }
        }
    }, []);
    return time
};
