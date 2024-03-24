"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import "./mermaidStyles.scss"
/// @ts-ignore
const Mermaid = dynamic(() => import("mdx-mermaid/lib/Mermaid"), {
    ssr: false,
});
import { connect } from 'react-redux';
import { RootState } from '@ulld/state/store';


const connector = connect((state: RootState, props: any) => ({
    darkMode: state.UI.darkmode,
    props: props
}))

interface InternalMermaidProps {

}




/* TODO: Handle darkmode change here. */
export const InternalMermaid = connector((props: InternalMermaidProps) => {
    console.log("mermaidProps: ", JSON.stringify(props, null, 4))
    /* let _props = { */
    /*     ...props */
    /* } */

    return (
        <Mermaid
            {...props}
        />
    )
})


InternalMermaid.displayName = "InternalMermaid"
