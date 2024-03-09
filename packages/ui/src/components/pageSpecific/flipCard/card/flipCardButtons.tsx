"use client"
import { Button } from '@ulld/tailwind/base'
import React from 'react'


interface FlipcardButtonsProps {
    containerId: string
    hasDescription: boolean
}


const FlipcardButtons = ({ containerId, hasDescription }: FlipcardButtonsProps) => {
    const setClass = (c: "question" | "answer" | "description") => {
        let em = document.getElementById(containerId)
        if (!em) return
        let cs = ["question", "answer", "description"]
        for (const k of cs) {
            if (k === c) {
                em.classList.add(k)
            } else {
                em.classList.remove(k)
            }
        }
    }

    return (
        <div className={"w-full flex flex-row justify-end items-center mt-6"}>
            <div className={"grid grid-cols-[auto_80px] gap-4"}>
                {hasDescription && <Button
                    onClick={() => setClass("description")}
                    className={"group-[.description]/flipCardContainer:hidden"}>Details</Button>}
                <Button
                    onClick={() => setClass("answer")}
                    className={"group-[.answer]/flipCardContainer:hidden"}>Answer</Button>
                <Button
                    onClick={() => setClass("question")}
                    className={"group-[.question]/flipCardContainer:hidden"}>Question</Button>
            </div>
        </div>
    )
}


FlipcardButtons.displayName = "FlipcardButtons"


export default FlipcardButtons;
