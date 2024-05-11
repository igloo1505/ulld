import Script, { ScriptProps } from "next/script"


export const MathjaxSvgLoader = () => <Script id="mathjax-script" src="/utils/tex-mml-svg.js" strategy="lazyOnload" />

export const MathjaxChtmlLoader = () => {
    return <Script
        id="mathjax-chtml-loader"
        src="/utils/tex-chtml.js"
        strategy="beforeInteractive"
    />
}


interface Props extends ScriptProps{
    type?: "svg" | "chtml" | "both"
}



/* TODO: This current issue with the style element text not matching and forcing a switch to client side rendering might be resolvable by finding the '\u001B' like syntax for the error output that's replacing quotes and whatnot. Finding those character's and replacing them with actual character's might resolve the issue. */
/* files if question:  */
/* - /Users/bigsexy/Desktop/notes/App/node_modules/rehype-mathjax/lib/create-renderer.js */
/* - /Users/bigsexy/Desktop/notes/App/node_modules/next-mdx-remote/dist/rsc.js */


export const MathjaxLoader = ({type = "both"}: Props) => {
    return (
        <>
            <Script
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
};`}
            </Script>
            {(type === "both" || type === "svg") && <MathjaxSvgLoader />}
            {(type === "both" || type === "chtml") && <MathjaxChtmlLoader />}
        </>
    )
}



MathjaxLoader.displayName = "MathjaxLoader"


export default MathjaxLoader;
