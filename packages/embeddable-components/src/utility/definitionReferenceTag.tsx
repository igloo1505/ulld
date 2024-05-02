import { HoverCard, HoverCardContent, HoverCardTrigger } from '@ulld/tailwind/hover-card'
import { BookA } from 'lucide-react'
import React from 'react'


interface DefinitionReferenceTagProps {
    definitionId: string
    content?: string
    label?: string
}


const DefinitionReferenceTag = ({ definitionId, content, label }: DefinitionReferenceTagProps) => {
    /* TODO: Move this to a distinct route and redirect to the appropriate URL instead of requiring this to be a client component so the href can be retrieved before even transitioning */

    return (
        <HoverCard>
            <HoverCardTrigger>
                <a
                    className={"queryLink queryTag inline-flex flex-row justify-center items-center gap-1 w-fit"}
                >
                    <BookA className={"w-4 h-4"} />
                    <span>
                        {definitionId}
                    </span>
                </a>
            </HoverCardTrigger>
            <HoverCardContent>
                {content}
            </HoverCardContent>
        </HoverCard>
    )
}


DefinitionReferenceTag.displayName = "DefinitionReferenceTag"


export default DefinitionReferenceTag;
