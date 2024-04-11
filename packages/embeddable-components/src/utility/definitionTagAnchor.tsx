import React from 'react'
import type { DefinitionTagProps } from './definitionTag';


/* WARNING: Not being used right now. Switched to html strings to allow markdown parsing within the content without any more hassle. If that method workds remove this element entirely. */
const DefinitionTagAnchor = ({ definitionId, content, label }: DefinitionTagProps) => {
    return (
        <dl
            id={`def-${definitionId}`}
            className={"block mb-4"}
        >
            <dt className={"font-bold text-lg"}>
                {label || definitionId}
            </dt>
            {content && <dd
                className={"ml-[30px] mt-[3px] mb-[10px]"}
                dangerouslySetInnerHTML={{ __html: content }}
            />}
        </dl>
    )
}


DefinitionTagAnchor.displayName = "DefinitionTagAnchor"


export default DefinitionTagAnchor;
