"use client";
import { TextUnderline } from "#/components/general/underline";
import { isCustomErrorPage } from "next/dist/build/utils";
import React, { useEffect, useState } from "react";

interface TypingTextProps {
    children: string;
    mistakes?: string[];
    speed?: number;
    underline?: string
}

const TypingText = ({
    children,
    mistakes = [],
    speed = 1,
    underline = "#f7f600"
}: TypingTextProps) => {
    const [content, setContent] = useState("");
    const [isComplete, setIsComplete] = useState(false)
    const typeText = (
        mistakeIndex: number = 0,
        letterIdx: number = 0,
        backwards: boolean = false
    ) => {
        const mistake = mistakes[mistakeIndex];
        const target = mistake ? mistake : children;
        setContent(target.slice(0, letterIdx));
        if (!Boolean(target === children && letterIdx === children.length)) {
        const isLastChar = letterIdx === target.length
            setTimeout(() => {
                typeText(
                   (backwards && letterIdx === 0) ? mistakeIndex + 1 : mistakeIndex,
                   (isLastChar || backwards) ? letterIdx === 0 ? 0 : letterIdx - 1 : letterIdx + 1,
                    (backwards && letterIdx !== 0) || (!backwards && letterIdx === target.length)
                );
            }, 150 / speed);
        } else {
            setIsComplete(true)
        }
    };
    useEffect(() => {
        typeText();
    }, [children, mistakes]);
    return <div className={"inline-block relative"}>
        {content}
        {underline && <TextUnderline
            width={40}
            show={isComplete}
            className={"absolute right-[-2px] top-[3vw] md:top-[1.25rem] origin-right w-[8ch] h-6"}
            color={underline}
        />}
    </div>
};

TypingText.displayName = "TypingText";

export default TypingText;
