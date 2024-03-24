import React from 'react'
import { getComponentMap } from '../../../markdown/componentMap'



interface FlipCardFrontProps {
    question?: {
        default: React.FC<{ components: any }>
    } | null
    raw: string
}

const FlipCardFront = ({ question, raw }: FlipCardFrontProps) => {
    const Content = question ? question.default : false
    return (
        <div className={"flipcardFace mdx compactMdx"}>
            {Content ? <Content components={getComponentMap(raw)} /> : <></>}
        </div>
    )

}


FlipCardFront.displayName = "FlipCardFront"


export default FlipCardFront;
