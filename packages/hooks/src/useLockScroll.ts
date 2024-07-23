"use client";
import { useEffect, useState } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicEffect";

type UseLockedBodyOutput = [boolean, (locked: boolean) => void];

export const useLockBodyScroll = (
    initialLocked = false,
    rootId?: string,
): UseLockedBodyOutput => {
    const [locked, setLocked] = useState(initialLocked);

    const lockElement = (em: HTMLElement) => {
        const originalOverflow = em.style.overflow;
        const originalPaddingRight = em.style.paddingRight;
        em.style.overflow = "hidden";
        const scrollBarWidth = em ? em.offsetWidth - em.scrollWidth : 0;
        if (scrollBarWidth) {
            em.style.paddingRight = `${scrollBarWidth}px`;
        }
        return () => {
            em.style.overflow = originalOverflow;
            if (scrollBarWidth) {
                em.style.paddingRight = originalPaddingRight;
            }
        };
    };
    useIsomorphicLayoutEffect(() => {
        if (!locked) {
            return;
        }
        let html = document.querySelector("html")
        const root = rootId
            ? document.getElementById(rootId)
            : document.querySelector("body");
        if (!root || !html) return;
        let rootEmCancel = lockElement(root)
        let htmlEmCancel = lockElement(html)
        return () => {
            rootEmCancel()
            htmlEmCancel()
        }
    }, [locked]);
    useEffect(() => {
        if (locked !== initialLocked) {
            setLocked(initialLocked);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialLocked]);

    return [locked, setLocked];
};
