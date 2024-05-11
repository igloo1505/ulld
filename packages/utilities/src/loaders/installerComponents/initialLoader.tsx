import MathjaxLoader from "./Mathjax"
import RequireJsLoader from "./RequireJsLoader"
import SvgLatexLoader from "./SvgLatexLoader"
/* import TikzLoader from "./TikzLoader" */



/* TODO: Move the SvgLatexLoader component over to be conditional when a jupyter component or plotly is being imported. It's uneccesary otherwise, redundent and heavy */
export const InitialLoader = () => {
    return (
        <>
        <RequireJsLoader />
        <MathjaxLoader />
        <SvgLatexLoader />
        </>
    )
}
