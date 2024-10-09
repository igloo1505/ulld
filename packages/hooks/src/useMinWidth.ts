"use client"
import { useEffect, useState } from "react";

// TODO: Remove all referenes to this and delete this all together in favor of react-responsive.
export const useMinWidth = (min: number) => {
    const [value, setValue] = useState(window?.innerWidth >= min);
    const handleResize = () => {
        setValue(window.innerWidth > min);
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [min]);
    return value
};
