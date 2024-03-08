import Script from 'next/script';
import React from 'react'


const SvgLatexLoader = () => {
    return (
        <Script type="module" id="123">
            {`import {LaTeXJSComponent} from "https://cdn.jsdelivr.net/npm/latex.js/dist/latex.mjs"
                    customElements.define("latex-js", LaTeXJSComponent)`}
        </Script>
    )
}


SvgLatexLoader.displayName = "SvgLatexLoader"


export default SvgLatexLoader;
