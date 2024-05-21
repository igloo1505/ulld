import { useEffect, useRef, useState } from "react";

export const useClientDarkMode = (initialValue: boolean = true) => {
    const [darkMode, setDarkMode] = useState(initialValue);
    const observer = useRef<MutationObserver | null>(null);
    const getDarkMode = () => {
        let dm = document.body?.classList?.contains("dark");
        return Boolean(dm);
    };
    const setListener = () => {
        if (observer.current) return;
        let html = document.querySelector("html");
        if (!html) return;
        let _observer = new MutationObserver((mutations) => {
            mutations.forEach((a) => {
                if (a.type === "attributes" && a.attributeName === "class") {
                    setDarkMode(getDarkMode());
                }
            });
        });
        _observer.observe(html, { attributes: true, attributeFilter: ["class"] });
        observer.current = _observer;
    };

    useEffect(() => {
        setDarkMode(getDarkMode());
        setListener();
        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, []);
    return darkMode;
};
