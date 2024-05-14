"use client";
import { allMiniFeatures } from "#/staticData/features/miniFeatures/allMiniFeatures";
import React, { useState, useRef, useEffect } from "react";
import MiniFeatureCard from "./main";
import MiniFeatureScrollBtn from "./featureMiniCardContainerScrollBtns";
import { motion } from "framer-motion";
import {
    Handler,
    createGesture,
    dragAction,
    scrollAction,
    wheelAction,
    CoordinatesConfig,
} from "@use-gesture/vanilla";
import { Lethargy } from "lethargy";
const lethargy = new Lethargy();

const Gesture = createGesture([scrollAction, wheelAction, dragAction]);

const dragRequirement = 50;

/* RESUME: Come back here and move this over to framer-motion, and then use the onAnimationComplete method to set the last index if the 'right' value is... right? */

interface Props {
    show: boolean;
    orientation: "rtl" | "ltr";
}

const cardWidth = 350;
const gap = 16;

const FeatureMiniCardContainer = ({ show }: Props) => {
    const [focusedIndex, _setFocusedIndex] = useState(0);
    const [maxIndex, _setMaxIndex] = useState(0);
    const mi = useRef(0);
    const fi = useRef(0);
    const setMaxIndex = (newIndex: number) => {
        mi.current = newIndex;
        _setMaxIndex(newIndex);
    };
    const setFocusedIndex = (newIndex: number) => {
        fi.current = newIndex;
        _setFocusedIndex(newIndex);
    };
    const scrolling = useRef(false);
    const container = useRef<HTMLDivElement>(null!);
    const containerInner = useRef<HTMLDivElement>(null!);
    const handleMaxIndex = () => {
        let containerWidth = container.current.clientWidth;
        let excessWidth =
            allMiniFeatures.length * (cardWidth + gap) - containerWidth;
        setMaxIndex(
            excessWidth <= 0 ? 0 : Math.ceil(excessWidth / (cardWidth + gap)),
        );
    };

    useEffect(() => {
        if (!show) {
            setFocusedIndex(0);
        }
    }, [show]);

    const checkLastIndex = () => {
        let em = document.getElementById(
            `mini-feature-card-${allMiniFeatures.length - 1}`,
        );
        if (!em) return;
        let rect = em.getBoundingClientRect();
        let containerRect = container.current.getBoundingClientRect();
        const shouldSetLast = rect.right - containerRect.right <= 4;
        if (shouldSetLast) {
            setMaxIndex(focusedIndex);
        }
        scrolling.current = false;
    };

    /* RESUME: Come back to this when on wifi and figure out how to get lethargy to work reliably while dragging horizontally. This is a super unreliable hack that will likely break on different types of devices, because lethargy was always returning -1. */
    const dragListener: Handler<
        "drag",
        PointerEvent | MouseEvent | TouchEvent | KeyboardEvent
    > = ({ active, movement: [mx], direction: [xDir], cancel }) => {
        if (scrolling.current) return;
        scrolling.current = true;
        /* let dir = lethargy.check(data.event); */
        /* if (!dir) return; */
        /* console.log(data.event); */
        /* if (dir === -1 && "movementX" in data.event) { */
        /*     dir = data.event.movementX <= 0 ? -1 : 1; */
        /* } */

        if (!active || Math.abs(mx) < dragRequirement) {
            return;
        }
        console.log("dir: ", xDir);
        console.log("focusedIndex: ", fi.current);
        console.log("maxIndex: ", mi.current);
        if (xDir > 0 && fi.current !== 0) {
            setFocusedIndex(fi.current - 1);
        } else if (xDir < 0 && fi.current < mi.current) {
            console.log("setFocusedIndex + 1");
            setFocusedIndex(fi.current + 1);
        }
        cancel();
    };

    const scrollListener: Handler<"scroll" | "wheel" | "drag", UIEvent> = (
        data,
    ) => {
        if (scrolling.current) return;
        scrolling.current = true;
        const dir = lethargy.check(data.event);
        if (!dir) return;
        if (dir > 0 && fi.current !== 0) {
            setFocusedIndex(fi.current - 1);
        } else if (dir < 0 && fi.current < mi.current) {
            console.log("setFocusedIndex + 1");
            setFocusedIndex(fi.current + 1);
        }
    };

    useEffect(() => {
        handleMaxIndex();
        window.addEventListener("resize", handleMaxIndex);
        Gesture(
            containerInner.current,
            {
                onScroll: scrollListener,
                onWheel: scrollListener,
                onDrag: dragListener,
            },
            {
                scroll: {
                    preventDefault: true,
                    axis: "x",
                },
                wheel: {
                    preventDefault: true,
                    axis: "x",
                },
                drag: {
                    preventDefault: true,
                    axis: "x",
                },
            },
        );
        return () => {
            window.removeEventListener("resize", handleMaxIndex);
        };
    }, []);

    return (
        <div
            className={"overflow-hidden max-w-[min(83vw,1080px)] mt-8 space-y-6"}
            ref={container}
        >
            <motion.div
                className={"w-full h-fit grid min-h-0 min-w-0 touch-none"}
                ref={containerInner}
                style={{
                    gridTemplateColumns: `repeat(${allMiniFeatures.length}, ${cardWidth}px)`,
                    gap: `${gap}px`,
                }}
                animate={{
                    x: (cardWidth + gap) * -focusedIndex,
                    transition: {
                        bounce: 0,
                    },
                }}
                onAnimationComplete={checkLastIndex}
            >
                {allMiniFeatures.map((item, i) => {
                    return (
                        <MiniFeatureCard
                            key={i}
                            idx={i}
                            maxWidth={`${cardWidth}px`}
                            show={show}
                            {...item}
                        />
                    );
                })}
            </motion.div>
            <div className={"flex flex-row justify-end items-center gap-4"}>
                <MiniFeatureScrollBtn
                    dir="left"
                    currentIndex={focusedIndex}
                    maxIndex={maxIndex}
                    setIndex={setFocusedIndex}
                    show={show}
                />
                <MiniFeatureScrollBtn
                    dir="right"
                    currentIndex={focusedIndex}
                    maxIndex={maxIndex}
                    setIndex={setFocusedIndex}
                    show={show}
                />
            </div>
        </div>
    );
};

FeatureMiniCardContainer.displayName = "FeatureMiniCardContainer";

export default FeatureMiniCardContainer;
