import React from 'react'
import {z} from 'zod'


/* TODO: Move this to a parent package and pass the type down. */
export const zodCitationObject = z.object({

}).transform((a) => "")

interface MdxCitationsProps {
    citations: z.output<typeof zodCitationObject>[]
}

export const MdxCitations = ({ citations }: MdxCitationsProps) => {
    if (citations.length === 0) return null
    return (
        <div className={"w-full"}>
            <h2 className={"w-full text-start text-xl font-semibold my-4"}>References</h2>
            {citations.map((citation) => citation)}
        </div>
    )
}


MdxCitations.displayName = "MdxCitations"
