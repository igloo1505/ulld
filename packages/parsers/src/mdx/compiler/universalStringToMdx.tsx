import { MathjaxParserParams } from '../../math/mathjaxParserOptionsParsing'

/* BETA: Not yet implemented */
export const universalStringToMathjax = async (s: string, options?: MathjaxParserParams) => {
    const isServer = Boolean(typeof window === "undefined")
    return {content: s}
}

