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
        if (timer.current) {
            clearTimeout(timer.current);
        }
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
            let replaced = content.replaceAll(/[^\d]/gm, "");
            let label = parseInt(replaced);
            if (!Number.isNaN(label)) {
                parsedItems.push(`${label}`);
            }
        });
        if (parsedItems.length > 0) {
            const labelNumber = parsedItems.join("");
            setLabelNumber(labelNumber);
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
            if (
                mutations.some(
                    (m) => "localName" in m.target && m.target.localName === "mjx-c",
                )
            ) {
                timer.current = setTimeout(() => {
                    let success = getLabel();
                    if (!success && retry < maxRetries) {
                        timer.current = setTimeout(() => setObserver(retry + 1), 500);
                    }
                }, 500);
            }
        });
        _observer.observe(em, {
            childList: true,
            subtree: true,
            attributes: true,
        });
        observer.current = _observer;
    };

    useEventListener("equation-rendered", (e) => {
        console.log("rendered event: ", e);
    });
    useEventListener("mathjax-loaded", (e) => {
        console.log("loaded event: ", e);
    });

    useEffect(() => {
        getLabel();
        setObserver();
        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [id]);

    if (!labelNumber) return defaultContent || null;
    return labelNumber;
};

EquationReference.displayName = "EquationReference";
