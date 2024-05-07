import { RefObject, useEffect, useState } from "react";
import { useViewport } from "./useViewport";

type PositionData = {
    width: number;
    height: number;
    document: {
        x: number;
        y: number;
    };
    client: {
        x: number;
        y: number;
    };
    popoverPrefer: {
        x: {
            dir: "left" | "right";
            origin: {
                document: number;
                client: number;
            };
        };
        y: {
            dir: "top" | "bottom";
            origin: {
                document: number;
                client: number;
            };
        };
    };
};

const usePosition = (ref: RefObject<HTMLElement>) => {
    const [position, setPosition] = useState<PositionData | null>(null);
    const vp = useViewport();
    const handlePosition = () => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const preferX: PositionData["popoverPrefer"]["x"]["dir"] =
            rect.x > window.innerWidth - rect.x - rect.width ? "left" : "right";
        const preferY: PositionData["popoverPrefer"]["y"]["dir"] =
            rect.y > window.innerHeight - rect.y - rect.height ? "top" : "bottom";
        const yOrigin = preferY === "top" ? rect.y : rect.y - rect.height;
        const xOrigin = preferX === "left" ? rect.x : rect.x - rect.width;
        setPosition({
            width: ref.current.clientWidth,
            height: ref.current.clientHeight,
            client: {
                x: rect.x,
                y: rect.y,
            },
            document: {
                x: rect.x + window.scrollX,
                y: rect.y + window.scrollY,
            },
            popoverPrefer: {
                y: {
                    dir: preferY,
                    origin: {
                        client: yOrigin,
                        document: yOrigin + window.scrollY,
                    },
                },
                x: {
                    dir: preferX,
                    origin: {
                        client: xOrigin,
                        document: xOrigin + window.scrollX,
                    },
                },
            },
        });
    };
    useEffect(() => {
        handlePosition();
        window.addEventListener("scroll", handlePosition);
        window.addEventListener("resize", handlePosition);
        return () => {
            window.removeEventListener("scroll", handlePosition);
            window.removeEventListener("resize", handlePosition);
        };
    }, [vp]);
};
