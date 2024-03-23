import {stringHasLatex} from "@ulld/utilities/utils/latexUtils"
import { JSDOM } from 'jsdom';
import { jsdomAdaptor } from 'mathjax-full/js/adaptors/jsdomAdaptor.js'
import { AllPackages } from 'mathjax-full/js/input/tex/AllPackages.js';
import { mathjax } from 'mathjax-full/js/mathjax.js';
import { TeX } from 'mathjax-full/js/input/tex.js';
import { CHTML } from 'mathjax-full/js/output/chtml.js';
import { RegisterHTMLHandler } from 'mathjax-full/js/handlers/html.js'
import { AssistiveMmlHandler } from 'mathjax-full/js/a11y/assistive-mml.js'
import { MathjaxParserParams, configureDefaultMathjaxOpts } from "./mathjaxParserOptionsParsing";



const fontURL = `/font/mathjax`


export const texToChtml = async (math: string, options: MathjaxParserParams = {}): Promise<{ content: string, styles?: string }> => {
    if (!stringHasLatex) return { content: math }
    const adaptor = jsdomAdaptor(JSDOM);
    const handler = RegisterHTMLHandler(adaptor);
    if (true) AssistiveMmlHandler(handler);
    const tex = new TeX({ packages: AllPackages });
    const chtml = new CHTML({ fontURL });
    const doc = mathjax.document('', { InputJax: tex, OutputJax: chtml });

    const opts = configureDefaultMathjaxOpts(options)

    const node = doc.convert(options.autoWrap && !opts.inline ? `\\begin{aligned}
${math}
\\end{aligned}` : math, {
        display: !opts.inline,
        em: opts.em,
        ex: opts.ex,
        containerWidth: opts.width,
        matchFontHeight: opts.matchFontHeight
    });

    let styles = adaptor.textContent(chtml.styleSheet(doc) as any)
    let htmlContent = adaptor.outerHTML(node)
    return { content: htmlContent, styles }

}
