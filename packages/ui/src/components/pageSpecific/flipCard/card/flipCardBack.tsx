import React from 'react'
import { getComponentMap } from '../../..'



interface FlipCardBackProps {
    answer?: {
        default: React.FC<{ components: any }>
    } | null
    raw: string
}


const FlipCardBack = ({ answer, raw }: FlipCardBackProps) => {
    const Content = answer ? answer.default : false
    return (
        <div className={"flipcardFace flipcardBack mdx compactMdx flex flex-col justify-center items-start"}>
            {Content ? <Content components={getComponentMap(raw)} /> : <></>}
        </div>
    )
}


FlipCardBack.displayName = "FlipCardBack"


export default FlipCardBack;
