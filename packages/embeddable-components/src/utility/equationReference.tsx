"use client";
import { getRandomId } from "@ulld/utilities/identity";
import { replaceRecursively } from "@ulld/utilities/utils/general";
import { useEffect, useRef, useState } from "react";
import { useEventListener } from "@ulld/hooks/useEventListener";

interface EquationReferenceProps {
    id: string;
    defaultContent?: string | number;
    maxRetries?: number;
}

export const EquationReference = ({
    id: _id,
    defaultContent,
    maxRetries = 5,
}: EquationReferenceProps) => {
    const [labelNumber, setLabelNumber] = useState<string | null>(null);
    const id = _id ? _id : getRandomId(16);
    const observer = useRef<MutationObserver | null>(null);
    const timer = useRef<NodeJS.Timeout | null>(null!);
    const getLabel = () => {
        let em = document.getElementById(`eqRef-${id}`);
        if (!em) return;
        let labelEm = em.querySelector("mjx-labels");
        if (!labelEm) return;
        let labelItems = labelEm.querySelectorAll("mjx-c");
        if (!labelItems || labelItems.length === 0) return;
        let parsedItems: string[] = [];
        labelItems.forEach((l) => {
            let styles = window.getComputedStyle(l, ":before");
            let content = styles["content"];
            let label = parseInt(replaceRecursively(content, /\"|\'/gm, ""));
            if (!Number.isNaN(label)) {
                parsedItems.push(`${label}`);
            }
        });
        if (parsedItems.length > 0) {
            setLabelNumber(parsedItems.join(""));
            return true;
        } else {
            return false;
        }
    };

    const setObserver = (retry: number = 1) => {
        if (!document || !id) return;
        let em = document.getElementById(`eqRef-${id}`);
        if (!id || !em) return;
        if (observer.current) {
            observer.current.disconnect();
        }
        if (timer.current) {
            clearTimeout(timer.current);
        }
        let _observer = new MutationObserver((mutations) => {
            if (mutations.map((m) => m.type).includes("childList")) {
                const success = getLabel();
                if (!success && retry < maxRetries) {
                    timer.current = setTimeout(() => setObserver(retry + 1), 500);
                }
            }
        });
        _observer.observe(em, {
            childList: true,
            subtree: true,
            attributes: true,
        });
        observer.current = _observer;
    };

    useEffect(() => {
        getLabel();
        setObserver();
        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [id]);

    useEventListener("mathjax-loaded", () => { });

    if (!labelNumber) return defaultContent || null;
    return labelNumber;
};

EquationReference.displayName = "EquationReference";
