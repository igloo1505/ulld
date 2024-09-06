import React from "react"
import MathjaxLoader from "./Mathjax.js"
import RequireJsLoader from "./RequireJsLoader.js"
import SvgLatexLoader from "./SvgLatexLoader.js"
/* import TikzLoader from "./TikzLoader" */

export type MathJaxLoaders = "svg" | "chtml" | "config"

export type InitialLoaderProps = {
    requireJs?: boolean,
    mathjax?: MathJaxLoaders[] | "all"
    latex?: boolean
}


/* TODO: Move the SvgLatexLoader component over to be conditional when a jupyter component or plotly is being imported. It's uneccesary otherwise, redundent and heavy */
export const InitialLoader = ({ requireJs = true, latex = true, mathjax = "all" }: InitialLoaderProps) => {
    return (
        <>
            {requireJs && <RequireJsLoader />}
            {latex && <SvgLatexLoader />}
            <MathjaxLoader
                type={mathjax}
            />
        </>
    )
}
