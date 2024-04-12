import { serverClient } from '@ulld/api/serverClient';
import { autoWrapMath } from '@ulld/utilities/latexUtils';
import React from 'react'
import MdxContentPreCompiled from './mdxContentPreCompiled';
import { getMdxClassnames } from './getMdxClassnames';


export interface MdxContentSERVERProps {
    bareAss?: boolean
    content?: string
    inline?: boolean
    parentId?: string
    className?: string
    isMathOnly?: boolean
    autoWrap?: boolean
    display?: boolean
    small?: boolean
    large?: boolean
    xl?: boolean
    live?: boolean // Might not be using this. Double check later.
}



const parseProps = (p: MdxContentSERVERProps) => {
    let inline = p.display === true ? false : true
    return {
        ...p,
        displayType: inline ? "inline" as "inline" : "display" as "display",
        content: !p.content ? "" : p.autoWrap ? autoWrapMath(p.content, !inline) : p.content
    }
}

export const MdxContentSERVER = async (_props: MdxContentSERVERProps) => {
    const props = parseProps(_props)
    const compiled = await serverClient.mdx.parseMdxString({
        content: props.content,
        display: props.displayType
    })  
    return (
        <MdxContentPreCompiled 
            content={compiled}
            raw={props.content}
            className={getMdxClassnames(_props)}
        />
    )
}


MdxContentSERVER.displayName = "MdxContentSERVER"


