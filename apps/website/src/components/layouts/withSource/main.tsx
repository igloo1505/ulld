"use client";
import { DocumentTypes } from "contentlayer/generated";
import React, { useEffect, useRef, useState } from "react";
import SourceCode from "./sourceCode";
import CodeOutput from "./output";
import MDXArticle from "../mdxArticle";
import {
    ResizablePanelGroup,
    ResizablePanel,
    ResizableHandle,
} from "@ulld/tailwind/resizable";
import MathjaxProvider from "#/components/utility/providers/mathjax";
import { useMotionValueEvent, useScroll } from "framer-motion";
import NavbarButtonPortal from "#/components/utility/portals/navbar";
import { navbarButtonClasses } from "../navbar/navbarButtonGroup";
import { cn } from "@ulld/utilities/cn";

interface SideBySideWithSourceProps {
    mdx: DocumentTypes;
}

const names = {
    output: "code-output",
    source: "source-code",
};

const saveId = "ulldWithSource";

const SideBySideWithSource = ({ mdx }: SideBySideWithSourceProps) => {
    const [scrollIndependent, setScrollIndependent] = useState(false);
    const sourceContainer = useRef<HTMLDivElement>(null!);
    const outputContainer = useRef<HTMLDivElement>(null!);
    const scrolling = useRef<false | "source" | "output">(false);
    const [sourceWidth, setSourceWidth] = useState<null | undefined | string>(
        null,
    );
    const timer = useRef<NodeJS.Timeout | null>(null);

    const toggleIndependent = () => {
        setScrollIndependent(!scrollIndependent);
    };

    const setTimer = () => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => (scrolling.current = false), 250);
    };

    const scrollCode = useScroll({
        container: sourceContainer,
    });
    const scrollOutput = useScroll({
        container: outputContainer,
    });

    useMotionValueEvent(scrollCode.scrollYProgress, "change", (latest) => {
        if (scrollIndependent || scrolling.current === "output") return;
        scrolling.current = "source";
        outputContainer.current.scrollTop =
            latest *
            (outputContainer.current.scrollHeight -
                outputContainer.current.clientHeight);
        setTimer();
    });

    useMotionValueEvent(scrollOutput.scrollYProgress, "change", (latest) => {
        if (scrollIndependent || scrolling.current === "source") return;
        scrolling.current = "output";
        sourceContainer.current.scrollTop =
            latest *
            (sourceContainer.current.scrollHeight -
                sourceContainer.current.clientHeight);
        setTimer();
    });

    const handleResize = (widths: number[]) => {
        const newSourceWidth = `${(widths[0] / 100) * window.innerWidth - 32}px`;
        setSourceWidth(newSourceWidth);
    };


    return (
        <ResizablePanelGroup
            className={"w-full h-full max-h-[calc(100vh-76px)]"}
            direction="horizontal"
            autoSaveId={saveId}
            onLayout={handleResize}
        >
            <NavbarButtonPortal>
                <a
                    role="button"
                    className={cn(
                        navbarButtonClasses,
                        !scrollIndependent && "text-foreground",
                    )}
                    onClick={toggleIndependent}
                >
                    Scroll Together
                </a>
            </NavbarButtonPortal>
            <ResizablePanel defaultSize={50}>
                <SourceCode
                    ref={sourceContainer}
                    content={mdx.body.raw}
                    data-name={names.source}
                    maxWidth={sourceWidth}
                />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50}>
                <CodeOutput ref={outputContainer} data-name={names.output}>
                    <MathjaxProvider>
                        <MDXArticle isSource mdx={mdx} />
                    </MathjaxProvider>
                </CodeOutput>
            </ResizablePanel>
        </ResizablePanelGroup>
    );
};

SideBySideWithSource.displayName = "SideBySideWithSource";

export default SideBySideWithSource;
