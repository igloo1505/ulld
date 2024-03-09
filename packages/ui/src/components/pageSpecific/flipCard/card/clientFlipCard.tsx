"use client"
import React, { useId, useState } from 'react'
import FlipCardFront from './flipCardFront'
import FlipCardBack from './flipCardBack'
import "#/styles/flipcard.scss"
import "#/styles/mdx.scss"
import "#/styles/compactMdx.scss"
import FlipcardButtons from './flipCardButtons'

interface ClientFlipCardProps {
    question: string
    description: string
    answer: string
    tags: string[]
    topic: string[]
    subject: string[]
}

interface CompiledCodeType {
    default: React.FC
}


/* TODO: Completely unhandled. Had to disable whatever I had here to get rid of some ts errors after a next-mdx-remote version change, but come back here later if needed. */
const ClientFlipCard = ({ question, description, answer, tags, topic, subject }: ClientFlipCardProps) => {
    const [loading, setLoading] = useState(false)
    const id = useId()
    const [parsedItem, setParsedItem] = useState<{
        question: CompiledCodeType | null,
        description: CompiledCodeType | null,
        answer: CompiledCodeType | null,
        tags: string[],
        topic: string[],
        subject: string[]
    }>({
        question: null,
        description: null,
        answer: null,
        tags: [],
        topic: [],
        subject: []
    })



    return (
        <div
            className={"flipCardContainer group/flipCardContainer question w-[min(560px,93%)] min-h-[400px]"}
            style={{
                perspective: "1000px"
            }}
            id={id}
        >
            <div className={"innerCard relative w-full h-full transition-transform duration-500 border border-border rounded-md"}
                style={{
                    transformStyle: "preserve-3d"
                }}
            >
                <FlipCardFront
                    question={parsedItem.question}
                    raw={question}
                />
                <FlipCardBack
                    answer={parsedItem.answer}
                    raw={answer}
                />
            </div>
            <FlipcardButtons
                containerId={id}
                hasDescription={true}
            />
        </div>
    )
}


ClientFlipCard.displayName = "ClientFlipCard"


export default ClientFlipCard;
