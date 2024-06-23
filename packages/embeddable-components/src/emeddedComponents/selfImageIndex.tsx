"use client"
import React, { RefObject, useEffect, useRef, useState } from "react";
import { RootState } from "@ulld/state/store";
import { connect } from "react-redux";

const connector = connect((state: RootState, props: any) => ({
    figureIds: state.note.figureIds,
    props: props,
}));

interface SelfFigureIndexProps {
    id: string;
    figureIds: RootState["note"]["figureIds"];
    imageId: string
    desc?: string;
}

const SelfFigureIndex = connector(
    ({ id, figureIds, imageId, desc }: SelfFigureIndexProps) => {
        const [imgIndex, setImgIndex] = useState<null | number>(null);
        const container = useRef<HTMLDivElement>(null!)

        const handleImageResize = () => {
            if(!container.current) return
            let dims = document.getElementById(imageId)?.getBoundingClientRect()
            container.current.style.maxWidth = dims ? `min(100%, ${dims.width * 1.25}px)` : "100%"
        }

        useEffect(() => {
            handleImageResize()
           document.getElementById(imageId)?.addEventListener("resize", handleImageResize) 
           return () => document.getElementById(imageId)?.removeEventListener("resize", handleImageResize) 
        }, [])

        useEffect(() => {
            if (!figureIds) return;
            let idx = figureIds.indexOf(id);
            if (idx >= 0) {
                setImgIndex(idx);
            }
        }, [figureIds]);

        if (typeof imgIndex !== "number") return null;
        return (
            <div
                ref={container}
            >
                <span>{`Figure ${imgIndex + 1}:`}</span>
                {desc && <span className={"ml-1"}>{desc}</span>}
            </div>
        );
    },
);

SelfFigureIndex.displayName = "SelfFigureIndex";

export default SelfFigureIndex;
