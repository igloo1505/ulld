import { useEffect, useRef, useState } from "react";

export const useClientDarkMode = (initialValue = true): boolean => {
    const [darkMode, setDarkMode] = useState(initialValue);
    const observer = useRef<MutationObserver | null>(null);
    const getDarkMode = (): boolean => {
        const dm = document.body.classList.contains("dark");
        return Boolean(dm);
    };

    useEffect(() => {
        setDarkMode(getDarkMode());
        const setListener = (): void => {
            if (observer.current) return;
            const html = document.querySelector("html");
            if (!html) return;
            const _observer = new MutationObserver((mutations) => {
                mutations.forEach((a) => {
                    if (a.type === "attributes" && a.attributeName === "class") {
                        setDarkMode(getDarkMode());
                    }
                });
            });
            _observer.observe(html, { attributes: true, attributeFilter: ["class"] });
            observer.current = _observer;
        };
        setListener();
        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, []);

    return darkMode;
};
