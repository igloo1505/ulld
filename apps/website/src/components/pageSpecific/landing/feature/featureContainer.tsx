"use client";
import React, { useRef } from "react";
import { FeatureContainerProps } from "./types";
import FeatureContainerText from "./featureContainerText";
import FeatureContainerDisplay from "./featureContainerDisplay";
import clsx from "clsx";
import { useViewport } from "@ulld/hooks/useViewport";
import { useInView } from "framer-motion";


const _delay = 3

const indexStyles = (idx: number) => {
       return "" 
    }

const FeatureContainer = ({
    orientation = "ltr",
    expandDisplay,
    override,
    spaceEven,
    displayContainerClasses,
    idx,
    ...props
}: FeatureContainerProps & {idx: number}) => {
    const vp = useViewport();
    const ref = useRef<HTMLDivElement>(null!);
    const shouldShow = useInView(ref, {margin: "-100px", once: true});
    if (override) {
        let O = override;
        return <O ref={ref} orientation={orientation} shouldShow={shouldShow} />;
    }
    return (
        <div
            ref={ref}
            className={clsx(
                "group/feature w-screen min-h-[calc(100vh-76px)] max-w-[1440px] gap-8 px-8 lg:px-12 mb-16 flex-col justify-around items-center lg:grid lg:grid-cols-2  place-items-center",
                spaceEven ? "grid grid-cols-1 md:flex" : "flex",
                vp?.window.width && vp.window.width < 768 ? "stack" : "flow",
                orientation === "rtl" && "flex-col-reverse lg:flex-row",
            )}
        >
            {orientation === "ltr" ? (
                <>
                    <FeatureContainerText
                        title={props.title}
                        desc={props.desc}
                        label={props.label}
                        orientation={orientation}
                        shouldShow={shouldShow}
                    />
                    <FeatureContainerDisplay
                        containerClasses={clsx(displayContainerClasses, indexStyles(idx))}
                        displayExpand={expandDisplay || spaceEven}
                        orientation={orientation}
                        component={props.component}
                        shouldShow={shouldShow}
                    />
                </>
            ) : (
                <>
                    <FeatureContainerDisplay
                        containerClasses={clsx(displayContainerClasses, indexStyles(idx))}
                        displayExpand={expandDisplay || spaceEven}
                        orientation={orientation}
                        component={props.component}
                        shouldShow={shouldShow}
                    />
                    <FeatureContainerText
                        title={props.title}
                        desc={props.desc}
                        label={props.label}
                        orientation={orientation}
                        shouldShow={shouldShow}
                    />
                </>
            )}
        </div>
    );
};

FeatureContainer.displayName = "FeatureContainer";

export default FeatureContainer;
