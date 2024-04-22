"use client"
import TypingText from "#/lib/typingText";
import Link from "next/link";
import React, { useEffect, useState } from "react";


const targetContent = "Free open source note taking for "

export const LandingSubTitle = () => {
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
            <h3 className={"h-6"}>
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
            <Link href="/joinMailingList">Join our mailing list</Link>
        </>
    );
};

LandingSubTitle.displayName = "LandingSubTitle";

