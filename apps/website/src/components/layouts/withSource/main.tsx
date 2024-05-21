"use client";
import { DocumentTypes } from "contentlayer/generated";
import React, { UIEvent, UIEventHandler, useRef, useState } from "react";
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

interface SideBySideWithSourceProps {
    mdx: DocumentTypes;
}

const names = {
    output: "code-output",
    source: "source-code",
};

const SideBySideWithSource = ({ mdx }: SideBySideWithSourceProps) => {
    const sourceContainer = useRef<HTMLDivElement>(null!);
    const outputContainer = useRef<HTMLDivElement>(null!);
    const scrolling = useRef<false | "source" | "output">(false);
    const timer = useRef<NodeJS.Timeout | null>(null)

    const setTimer = () => {
            if(timer.current){
            clearTimeout(timer.current)
        }
        timer.current = setTimeout(() => scrolling.current = false, 250)
        }

    const scrollCode = useScroll({
        container: sourceContainer,
    });
    const scrollOutput = useScroll({
        container: outputContainer,
    });

    useMotionValueEvent(scrollCode.scrollYProgress, "change", (latest) => {
        if (scrolling.current === "output") return;
        scrolling.current = "source";
        outputContainer.current.scrollTop =
            latest * (outputContainer.current.scrollHeight - outputContainer.current.clientHeight);
        setTimer()
    });

    useMotionValueEvent(scrollOutput.scrollYProgress, "change", (latest) => {
        if (scrolling.current === "source") return;
        scrolling.current = "output";
        sourceContainer.current.scrollTop =
            latest * (sourceContainer.current.scrollHeight - sourceContainer.current.clientHeight);
        setTimer()
    });

    return (
        <ResizablePanelGroup
            className={"w-full h-full max-h-[calc(100vh-76px)]"}
            direction="horizontal"
        >
            <ResizablePanel defaultSize={50}>
                <SourceCode
                    ref={sourceContainer}
                    /* onScroll={onScroll} */
                    content={mdx.body.raw}
                    data-name={names.source}
                />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50}>
                <CodeOutput
                    /* onScroll={onScroll} */
                    ref={outputContainer}
                    data-name={names.output}
                >
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
