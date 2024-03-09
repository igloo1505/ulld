import { BibEntry } from '@ulld/api'
import React from 'react'



interface MdxCitationsProps {
    citations: BibEntry[]
}

const MdxCitations = ({ citations }: MdxCitationsProps) => {
    if (citations.length === 0) return null
    return (
        <div className={"w-full"}>
            <h2 className={"w-full text-start text-xl font-semibold my-4"}>References</h2>
            {citations.map((citation) => citation.toHtml())}
        </div>
    )
}


MdxCitations.displayName = "MdxCitations"


export default MdxCitations;
