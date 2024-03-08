import { serverClient } from '#/trpc/serverClient'
import Script from 'next/script'
import React from 'react'


/* TODO: Come back and install this locally for offline use without the need to fetch from a cdn. Should be really simply, but it's almost midnight and I have to pee. */


type LatexProps = ({ latex: string, file?: undefined }) | ({ file: string, latex?: undefined })


declare global {
    namespace JSX {
        interface IntrinsicElements {
            // Admittedly a lazy way to handle this. I'll come back and clean this up along with the 32 other typescript errors.
            ['latex-js']: any
        }
    }
}


const Latex = async ({ latex, file }: LatexProps) => {
    const content = file ? await serverClient.getUtf8File(file) : latex
    return (
        <>
            <Script type="module" id="123">
                {`import {LaTeXJSComponent} from "https://cdn.jsdelivr.net/npm/latex.js/dist/latex.mjs"
                    customElements.define("latex-js", LaTeXJSComponent)`}
            </Script>
            <latex-js baseURL="https://cdn.jsdelivr.net/npm/latex.js/dist/" className={"w-full h-full"}>
                {content}
            </latex-js>
        </>
    )
}


Latex.displayName = "Latex"


export default Latex;
