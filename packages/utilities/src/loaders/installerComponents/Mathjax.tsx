"use client"
import Script, { ScriptProps } from "next/script"
import { MathJaxLoaders } from "./initialLoader"


export const MathjaxSvgLoader = () => {
    console.log(`Loading Mathjax Svg`)
return <Script
    id="mathjax-script" 
    src="/utils/tex-mml-svg.js"
    strategy="lazyOnload"
/>
}

export const MathjaxChtmlLoader = () => {
    console.log(`Loading Mathjax Chtml`)
    return <Script
        id="mathjax-chtml-loader"
        src="/utils/tex-chtml.js"
        strategy="beforeInteractive"
    />
}


interface Props extends Omit<ScriptProps, "type">{
    type?: MathJaxLoaders[] | "all"
}



/* TODO: This current issue with the style element text not matching and forcing a switch to client side rendering might be resolvable by finding the '\u001B' like syntax for the error output that's replacing quotes and whatnot. Finding those character's and replacing them with actual character's might resolve the issue. */
/* files if question:  */
/* - /Users/bigsexy/Desktop/notes/App/node_modules/rehype-mathjax/lib/create-renderer.js */
/* - /Users/bigsexy/Desktop/notes/App/node_modules/next-mdx-remote/dist/rsc.js */



export const MathjaxLoader = ({type = "all"}: Props) => {
    let types: Record<MathJaxLoaders, boolean>  = {
         chtml: type === "all" ? true : type.includes("chtml"),
         svg: type === "all" ? true : type.includes("svg"),
         config: type === "all" ? true : type.includes("config"),
    }
    return (
        <>
            {types.config && <Script
                type="text/x-mathjax-config"
                id="mathjax-settings"
                strategy="beforeInteractive"
            >
                {`window.MathJax = {
  tex: {
    inlineMath: [['$', '$']]
  },
  menuSettings: {
    autocollapse: true
  },
  chtml: {
    minScale: 0.2,
    fontURL: "/font/mathjax",
  }
}`}
            </Script>}
            {types.svg && <MathjaxSvgLoader />}
            {types.chtml && <MathjaxChtmlLoader />}
        </>
    )
}



MathjaxLoader.displayName = "MathjaxLoader"


export default MathjaxLoader;
