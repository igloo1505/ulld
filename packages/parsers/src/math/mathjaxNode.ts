import { mathjax } from 'mathjax-full/js/mathjax.js'
import { TeX } from 'mathjax-full/js/input/tex.js'
import { SVG } from 'mathjax-full/js/output/svg.js'
import { jsdomAdaptor } from 'mathjax-full/js/adaptors/jsdomAdaptor.js'
import { RegisterHTMLHandler } from 'mathjax-full/js/handlers/html.js'
import { AssistiveMmlHandler } from 'mathjax-full/js/a11y/assistive-mml.js'
import { AllPackages } from 'mathjax-full/js/input/tex/AllPackages.js'
import { JSDOM } from 'jsdom';
import { texToChtml } from './texToChtml'
import { MathjaxParserParams } from './mathjaxParserOptionsParsing'
import { stringHasLatex } from '@ulld/utilities/utils/latexUtils'


const adaptor = jsdomAdaptor(JSDOM);
const handler = RegisterHTMLHandler(adaptor);


export const configureDefaultOpts = (opts: MathjaxParserParams): Required<Omit<MathjaxParserParams, "matchFontHeight">> & { matchFontHeight: boolean | undefined } => {
    return {
        inline: typeof opts.inline !== "boolean" ? true : opts.inline,
        em: opts.em || 16,
        ex: opts.ex || 8,
        width: opts.width || 80 * 16,
        styles: typeof opts.styles !== "boolean" ? true : opts.styles,
        container: typeof opts.container !== "boolean" ? true : opts.container,
        fontCache: typeof opts.fontCache !== "boolean" ? true : opts.fontCache,
        assistiveMml: typeof opts.assistiveMml !== "boolean" ? true : opts.assistiveMml,
        autoWrap: typeof opts.autoWrap === "boolean" ? opts.autoWrap : false,
        matchFontHeight: typeof opts.matchFontHeight === "boolean" ? opts.matchFontHeight : undefined
    }
}

export const stringOrMath = (content: string) => {
    let d: { math: boolean, value: string, indices: [number, number] }[] = []
    const regex = /\$(?<math>[^$]*)\$/gm
    let m;
    do {
        m = regex.exec(content);
        if (m && m.groups?.math) {
            let lastIndex = d.at(-1)?.indices[1]
            if (lastIndex && lastIndex < m.index - 1) {
                d.push({ math: false, value: content.slice(lastIndex, m.index), indices: [lastIndex, m.index] })
            }
            if (d.length === 0 && m.index !== 0) {
                let idx = content.indexOf("$")
                d.push({
                    math: false,
                    value: content.slice(0, idx),
                    indices: [0, idx]
                })
            }
            d.push({ math: true, value: m.groups.math, indices: [m.index, m.index + m[0].length] })
        }
    } while (m);
    let lastIndex = d.at(-1)?.indices[1] as number
    if (lastIndex < content.length - 1) {
        d.push({ math: false, value: content.slice(lastIndex, content.length), indices: [lastIndex, content.length] })
    }
    return d
}

export const convertMathOnly = (math: string, opts: Required<MathjaxParserParams>) => {
    if (opts.assistiveMml) AssistiveMmlHandler(handler);
    const tex = new TeX({ packages: AllPackages });
    const svg = new SVG({ fontCache: (opts.fontCache ? 'local' : 'none') });
    const htmlJax = mathjax.document('', { InputJax: tex, OutputJax: svg });
    const node = htmlJax.convert(math || '', {
        display: !opts.inline,
        em: opts.em,
        ex: opts.ex,
        containerWidth: opts.width
    });
    let html = (opts.container ? adaptor.outerHTML(node) : adaptor.innerHTML(node));
    return html
}


// TEMPORARY: Improve this using regex to allow for escaping dollar signs.
export const convertLatexToHtml = async (content: string, options: MathjaxParserParams = {}) => {
    if (!stringHasLatex(content)) {
        return content
    }
    const temporary = await texToChtml(content, options)
    return temporary
}
