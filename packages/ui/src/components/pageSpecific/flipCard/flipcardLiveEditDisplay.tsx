"use client"
import React from 'react'
import ClientFlipCard from './card/clientFlipCard';
import MdxProvider from '../../mdxContent/mdxProvider';



interface FlipcardLiveEditDisplayProps {
    question: string
    description: string
    answer: string
    tags: string[]
    topic: string[]
    subject: string[]
}


const FlipcardLiveEditDisplay = ({ question, description, answer, tags, topic, subject }: FlipcardLiveEditDisplayProps) => {
    return (
        <MdxProvider>
            <div className={"w-full h-full flex flex-col justify-start items-center"}>
                <ClientFlipCard
                    question={question}
                    description={description}
                    answer={answer}
                    tags={tags}
                    topic={topic}
                    subject={subject}
                />
            </div>
        </MdxProvider>
    )
}


FlipcardLiveEditDisplay.displayName = "FlipcardLiveEditDisplay"


export default FlipcardLiveEditDisplay;
