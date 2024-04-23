"use client"
import TypingText from "#/lib/typingText";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import clsx from 'clsx'


const targetContent = "Free open source note taking for "

interface Props {
className?: string
    }

export const LandingSubTitle = ({className}: Props) => {
    const [content, setContent] = useState("")
    const animateTitle = (idx: number = 0) => {
           setContent(targetContent.slice(0, idx))
        if(idx < targetContent.length){
            setTimeout(() => {
                animateTitle(idx + 1)
            }, 50)
        }
        }

    useEffect(() => {
        animateTitle()
    }, [])

    return (
        <>
            <h3 className={clsx("h-6", className)}>
               {content} 
                {content === targetContent && <TypingText
                    speed={2}
                    mistakes={[
                        "students",
                        "cooks",
                        "creators",
                        "entrepreneurs",
                        "academics",
                    ]}
                >
                    everyone.
                </TypingText>}
            </h3>
        </>
    );
};

LandingSubTitle.displayName = "LandingSubTitle";

