import { parseLatexString, serverClient } from '@ulld/api'
import { MathjaxParserParams } from '@ulld/parsers'
import { getRandomId } from '@ulld/utilities'
import clsx from 'clsx'
import React from 'react'



interface MathDisplaySERVERProps {
    content?: string
    children?: string
    display?: boolean
    className?: string
    autoWrap?: boolean
    element?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "a"
    elementProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
    mathjaxOptions?: MathjaxParserParams
    isMathOnly?: boolean
    stylesContainerId?: string
}


export const MathDisplaySERVER = async ({ content: math, children, stylesContainerId, autoWrap, className, display, element = "div", isMathOnly = false, elementProps = {}, mathjaxOptions = {} }: MathDisplaySERVERProps) => {

    if (!math && !children) return null
    const id = stylesContainerId ? stylesContainerId : getRandomId()

    let props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> = {
        className: clsx("max-w-full max-h-full", className && className),
        ...elementProps
    }

    /* const content = await conditionallyParseMath({ math, children, display, autoWrap, mathjaxOptions, isMathOnly, stylesContainerId: id }) */
    if (!math) return null
    let content = await parseLatexString({
        content: math,
        appendStylesToId: id,
        autoWrap,
        options: {
            inline: !display
        }
    })

    if (!content) return null

    const Styles = content.Styles ? content.Styles : () => <></>
    props.id = content.containerId
    if (content.Styles) {
        props.dangerouslySetInnerHTML = { __html: content.html }
    } else {
        props.children = content.html
    }

    if (element === "div") {
        return (
            <>
                {Styles && <Styles />}
                <div {...props} />
            </>
        )
    }

    if (element === "span") {
        return (
            <>
                {Styles && <Styles />}
                <span {...props} />
            </>
        )
    }
    if (element === "p") {
        return (
            <>
                {Styles && <Styles />}
                <p {...props} />
            </>
        )
    }
    if (element === "h1") {
        return (
            <>
                {Styles && <Styles />}
                <h1 {...props} />
            </>
        )
    }
    if (element === "h2") {
        return (
            <>
                {Styles && <Styles />}
                <h2 {...props} />
            </>
        )
    }
    if (element === "h3") {
        return (
            <>
                {Styles && <Styles />}
                <h3 {...props} />
            </>
        )
    }
    if (element === "h4") {
        return (
            <>
                {Styles && <Styles />}
                <h4 {...props} />
            </>
        )
    }
    if (element === "h5") {
        return (
            <>
                {Styles && <Styles />}
                <h5 {...props} />
            </>
        )
    }
    if (element === "h6") {
        return (
            <>
                {Styles && <Styles />}
                <h6 {...props} />
            </>
        )
    }
    if (element === "a") {
        return (
            <>
                {Styles && <Styles />}
                <a {...props} />
            </>
        )
    }
}


MathDisplaySERVER.displayName = "MathDisplaySERVER"

