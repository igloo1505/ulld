"use client";
import { LandingSection, getNewSection } from "#/types/landingSection";
import { useEffect, useRef } from "react";
import {
    Handler,
    createGesture,
    scrollAction,
    wheelAction,
} from "@use-gesture/vanilla";
import { Lethargy } from "lethargy";
import { useLockBodyScroll } from "@ulld/hooks/useLockScroll";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { setLandingSection } from "#/state/actions/navigation";
import { useGlobalLandingSectionState } from "./feature/useSectionIndex";


const lethargy = new Lethargy();
const Gesture = createGesture([scrollAction, wheelAction]);

const ScrollGestureListener = () => {
    const pathname = usePathname();
    const _section = useGlobalLandingSectionState()
    console.log("_section: ", _section)
    const section = useRef<LandingSection | string | undefined>("hero");
    section.current = _section;
    useEffect(() => {
        section.current = _section;
    }, [_section]);
    useLockBodyScroll(true);
    const scrolling = useRef<boolean>(false);
    const gest = useRef<ReturnType<typeof Gesture> | null>(null);
    const setScrolling = (val: boolean) => (scrolling.current = val);

    const setContainerClass = (newSection: LandingSection | string) => {
        let em = document.getElementById("main-landing-container");
        if (!em) return;
        let newClasses: string[] = [`section-${newSection}`];
        em.classList.forEach((val) => {
            if (!val.startsWith("section-")) {
                newClasses.push(val);
            }
        });
        em.classList.value = newClasses.join(" ");
    };
    const wheelListener: Handler<"wheel", UIEvent> = (data) => {
        if (!data.last) {
            if (scrolling.current) return;
            setScrolling(true);
            const dir = lethargy.check(data.event);
            if (!dir) return;
            const newSection = getNewSection(
                section.current,
                dir < 0 ? "up" : "down",
            );
            if (newSection) {
                setLandingSection(newSection)
                setContainerClass(newSection);
            }
        } else {
            setScrolling(false);
        }
    };
    const scrollListener: Handler<"scroll", UIEvent> = (data) => {
        if (!data.last) {
            if (scrolling.current) return;
            setScrolling(true);
            const dir = lethargy.check(data.event);
            if (!dir) return;
            const newSection = getNewSection(
                section.current,
                dir < 0 ? "up" : "down",
            );
            if (newSection) {
                setLandingSection(newSection)
                setContainerClass(newSection);
            }
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        let gesture: ReturnType<typeof Gesture> | null = null;
        if (pathname === "/" && typeof window !== "undefined") {
            /* @ts-ignore */
            gesture = new Gesture(
                window,
                {
                    onScroll: scrollListener,
                    onWheel: wheelListener,
                },
                {
                    scroll: {
                        preventDefault: true,
                    },
                    wheel: {
                        preventDefault: true,
                    },
                },
            );
            gest.current = gesture;
        } else {
            if (gest.current) {
                console.log("destroying gesture due to pathname ")
                gest.current.destroy();
                gest.current = null;
            }
        }
        return () => {
            console.log("destroying gesture: ")
            if (gesture) {
                gesture.destroy();
            }
            if (gest.current) {
                gest.current.destroy()
                gest.current = null;
            }
        };
    }, [pathname]);

    return null;
};

ScrollGestureListener.displayName = "ScrollGestureListener";

export default ScrollGestureListener;
