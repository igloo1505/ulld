"use client";
import { TextUnderline } from "#/components/general/underline";
import { useLandingSection } from "#/components/pageSpecific/landing/useSection";
import { useEventListener } from "@ulld/hooks/useEventListener";
import React, { useEffect, useRef, useState } from "react";

interface TypingTextProps {
    children: string;
    mistakes?: string[];
    speed?: number;
    underline?: string;
}

const TypingText = ({
    children,
    mistakes = [],
    speed = 1,
    underline = "#f7f600",
}: TypingTextProps) => {
    const [content, setContent] = useState("");
    const [isComplete, setIsComplete] = useState(false);
    /* const [cancelled, setCancelled] = useState(false); */
    const cancelled = useRef<boolean>(false)
    const abortTyping = useRef<boolean>(false);
    const section = useLandingSection();

    const cancelTyping = (setCancel: boolean = false) => {
        console.log(`Cancelling`)
        setContent("");
        setIsComplete(false);
        abortTyping.current = true;
        if (setCancel) {
            cancelled.current = true
        }
    };

    useEffect(() => {
        if (section !== "hero") {
            cancelTyping();
        }
    }, [section]);

    useEventListener("cancel-landing-typing", () => {
        cancelTyping(true);
    });

    const typeText = (
        mistakeIndex: number = 0,
        letterIdx: number = 0,
        backwards: boolean = false,
    ) => {
        if (abortTyping.current) {
            if (!cancelled.current) {
                abortTyping.current = false;
            }
            return;
        }
        const mistake = mistakes[mistakeIndex];
        const target = mistake ? mistake : children;
        setContent(target.slice(0, letterIdx));
        if (
            !Boolean(target === children && letterIdx === children.length) &&
            !abortTyping.current
        ) {
            const isLastChar = letterIdx === target.length;
            setTimeout(() => {
                if(cancelled.current) return
                typeText(
                    backwards && letterIdx === 0 ? mistakeIndex + 1 : mistakeIndex,
                    isLastChar || backwards
                        ? letterIdx === 0
                            ? 0
                            : letterIdx - 1
                        : letterIdx + 1,
                    (backwards && letterIdx !== 0) ||
                    (!backwards && letterIdx === target.length),
                );
            }, 150 / speed);
        } else {
            setIsComplete(true);
        }
    };
    useEffect(() => {
        if (section === "hero" && !isComplete) {
            typeText();
        }
    }, [children, mistakes, section]);

    const resumeTyping = () => {
        console.log(`Resuming with section: ${section}`)
        if (section === "hero") {
            setContent("");
            setIsComplete(false);
            abortTyping.current = false;
            cancelled.current = false
        }
    };
    useEventListener("resume-landing-typing", resumeTyping);

    return (
        <div className={"inline-block relative"}>
            {content}
            {underline && (
                <TextUnderline
                    width={40}
                    show={isComplete && !abortTyping.current}
                    className={
                        "absolute right-[-2px] top-[3vw] md:top-[1.25rem] origin-right w-[8ch] h-6"
                    }
                    color={underline}
                />
            )}
        </div>
    );
};

TypingText.displayName = "TypingText";

export default TypingText;