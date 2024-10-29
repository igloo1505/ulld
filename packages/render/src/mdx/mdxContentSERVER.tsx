import type { ReactNode } from 'react';
import React from 'react'
import { parseMdxString } from "@ulld/parsers/mdx";
import { getMdxClassnames } from './getMdxClassnames';
import { MdxContentPreCompiled } from './mdxContentPreCompiled';
import type { MdxContentSERVERProps } from './typeUtils';
import { parseMdxContentProps } from './mdxPropsUtils';


export const MdxContentSERVER = async (_props: MdxContentSERVERProps): Promise<Awaited<ReactNode>> => {
    const props = parseMdxContentProps<MdxContentSERVERProps>(_props)
    const compiled = await parseMdxString({
        content: props.content,
        appConfig: props.appConfig,
        opts: _props.parserOpts
    })
    const classNames = getMdxClassnames(_props)
    return (
        <MdxContentPreCompiled
            applyMathContextMenu={(props.autoWrap && props.isMathOnly) || props.applyMathContextMenu}
            className={classNames}
            components={[]}
            content={compiled || ""}
            raw={props.content}
        /* components={_props.components} */
        />
    )
}


MdxContentSERVER.displayName = "MdxContentSERVER"

export type { MdxContentSERVERProps }
