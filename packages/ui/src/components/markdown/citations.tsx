import React from 'react'

interface MdxCitationsProps {
    citations: string[]
}

export const MdxCitations = ({ citations }: MdxCitationsProps) => {
    console.log("citations: ", citations)
    if (citations.length === 0) return null
    return (
        <div className={"w-full"}>
            <h2 className={"w-full text-start text-xl font-semibold my-4"}>References</h2>
            {citations.map((citation) => citation)}
        </div>
    )
}


MdxCitations.displayName = "MdxCitations"
