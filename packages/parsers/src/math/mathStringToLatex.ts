import { compileSassString, wrapCssWithSpecifier } from ".."
import { MathjaxParserParams } from "./mathjaxParserOptionsParsing"
// import { texToChtml } from "./texToChtml"


export const mathStringToLatex = async (content: string, parserOptions: MathjaxParserParams, appendStylesToId?: string, appendStylesToClass?: string) => {
    let texToChtml = await import("./texToChtml").then((a) => a.texToChtml)
    let res = await texToChtml(content, parserOptions)
    const _styles = res.styles ? Boolean(appendStylesToId || appendStylesToClass) ? await compileSassString(wrapCssWithSpecifier(res.styles, appendStylesToId, appendStylesToClass)) : res.styles : undefined
    return {
        content: res.content,
        styles: typeof _styles === "string" ? _styles : _styles?.css
    }
}
