"client"
import { client } from '@ulld/api/client'
import clsx from 'clsx'
import React from 'react'
import { getInternalConfig } from '@ulld/configschema/zod/getInternalConfig'
import { useDebounceParse } from '@ulld/hooks/useDebounceParse'
import MathContextMenu from './equation/mathContextMenu'
import { MathjaxParserParams } from '@ulld/parsers/math/mathjaxParserOptionsParsing'
import { appendStyleSheet } from '@ulld/state/actions/clientOnly/appendStyleSheet'
import { stringHasLatex } from '@ulld/utilities/latexUtils'



interface MathDisplayProps {
    content: string
    display?: boolean
    className?: string
    autoWrap?: boolean
    element?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "a"
    elementProps?: { [propName: string]: any }
    mathjaxOptions?: MathjaxParserParams
    isMathOnly?: boolean
    stylesId?: string
}


export const MathDisplayCLIENT = (_props: MathDisplayProps) => {
    const internalConfig = getInternalConfig()
    const { content: math, stylesId, autoWrap, className, display, element = "div", isMathOnly = false, elementProps = {}, mathjaxOptions = {} } = _props
    const content = ""
    /* TEMPORARY: This useDebounceParse won't work. I'm half assing it for now to get these ts errors handled.  */
    /* const { value: content } = useDebounceParse(math, internalConfig.performance.latexParsingDebounceTimeout, async (newMath, previousValue): Promise<string> => { */
    /*     const hasLatex = stringHasLatex(newMath) */
    /*     if (hasLatex || Boolean(isMathOnly && newMath.trim().length >= 3)) { */
    /*         const res = await client.equations.mathStringToLatex.mutate({ */
    /*             content: newMath, */
    /*             options: { */
    /*                 inline: !display, */
    /*                 autoWrap: typeof autoWrap === "boolean" ? autoWrap : display, */
    /*                 ...mathjaxOptions */
    /*             }, */
    /*             appendStylesToId: `${stylesId}-container`, */
    /*         }) */
    /*         if (res.styles) { */
    /*             appendStyleSheet(res.styles, `${stylesId}-styles`) */
    /*         } */
    /*         return res.content */
    /*     } else { */
    /*         return newMath */
    /*     } */
    /*     return previousValue */
    /* }) */

    let props = {
        className: clsx("max-w-full max-h-full", className && className),
        id: `${stylesId}-container`,
        dangerouslySetInnerHTML: { __html: content || "" },
        ...elementProps
    }

    if (element === "div") {
        return (
            <MathContextMenu latex={math}>
                <div {...props} />
            </MathContextMenu>
        )
    }

    if (element === "span") {
        return (
            <MathContextMenu latex={math}>
                <span {...props} />
            </MathContextMenu>
        )
    }
    if (element === "p") {
        return (
            <MathContextMenu latex={math}>
                <p {...props} />
            </MathContextMenu>
        )
    }
    if (element === "h1") {
        return (
            <MathContextMenu latex={math}>
                <h1 {...props} />
            </MathContextMenu>
        )
    }
    if (element === "h2") {
        return (
            <MathContextMenu latex={math}>
                <h2 {...props} />
            </MathContextMenu>
        )
    }
    if (element === "h3") {
        return (
            <MathContextMenu latex={math}>
                <h3 {...props} />
            </MathContextMenu>
        )
    }
    if (element === "h4") {
        return (
            <MathContextMenu latex={math}>
                <h4 {...props} />
            </MathContextMenu>
        )
    }
    if (element === "h5") {
        return (
            <MathContextMenu latex={math}>
                <h5 {...props} />
            </MathContextMenu>
        )
    }
    if (element === "h6") {
        return (
            <MathContextMenu latex={math}>
                <h6 {...props} />
            </MathContextMenu>
        )
    }
    if (element === "a") {
        return (
            <MathContextMenu latex={math}>
                <a {...props} />
            </MathContextMenu>
        )
    }
}


MathDisplayCLIENT.displayName = "MathDisplay"


