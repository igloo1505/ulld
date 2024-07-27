import { autoWrapMath } from '@ulld/utilities/latexUtils';
import React from 'react'
import MdxContentPreCompiled from './mdxContentPreCompiled';
import { getMdxClassnames } from './getMdxClassnames';
import { parseMdxString } from "@ulld/parsers/mdx";
import { AdditionalComponents } from '@ulld/component-map/types';
import { AppConfigSchemaOutput } from '@ulld/configschema/types';
import { readAppConfig } from '@ulld/developer/readAppConfig';


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
    applyMathContextMenu?: boolean
    components?: AdditionalComponents
    appConfig?: AppConfigSchemaOutput
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
    let appConfig = _props.appConfig || await readAppConfig()
    const props = parseProps(_props)
    let compiled = await parseMdxString({
        content: props.content,
        appConfig: props.appConfig
    })
    const classNames = getMdxClassnames(_props)
    return (
        <MdxContentPreCompiled 
            content={compiled}
            raw={props.content}
            className={classNames}
            applyMathContextMenu={(props.autoWrap && props.isMathOnly) || props.applyMathContextMenu}
            components={_props.components}
        />
    )
}


MdxContentSERVER.displayName = "MdxContentSERVER"


