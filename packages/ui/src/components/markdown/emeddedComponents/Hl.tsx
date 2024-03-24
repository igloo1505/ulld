import clsx from 'clsx'
import React from 'react'
import { ComposedTooltip } from '../../notifications/tooltip/tooltip'
import { PropColor } from '@ulld/utilities/shadColorMap'
import { getPropColor } from "@ulld/state/actions/ui/getPropColor"

export interface WithTooltipWrapper {
    toolTip?: string
    tooltip?: string
    tt?: string
    toolTipAsLink?: boolean
    ttAslink?: boolean
}

const ttIsLink = (t: string) => {
    return Boolean(/^(\/|http|www|\#)/gm.test(t))
}

export const getToolTipWrapperContent = (t: WithTooltipWrapper) => {
    let val: string | undefined = undefined
    if (t.tooltip) {
        val = t.tooltip
    }
    if (t.toolTip) {
        val = t.toolTip
    }
    if (t.tt) {
        val = t.tt
    }
    return val ? {
        content: val,
        isLink: t.toolTipAsLink || t.ttAslink || ttIsLink(val)
    } : false
}


export interface HighlightProps extends Record<keyof PropColor, boolean> {
}


export const Highlight = (props: HighlightProps & any & WithTooltipWrapper & { light?: boolean, faint?: boolean, muted?: boolean }) => {
    let { color, props: _props } = getPropColor(props, "bg", "yellow")
    let tt = getToolTipWrapperContent(props)
    if (tt) {
        return (
            <ComposedTooltip
                content={tt.isLink ? <a href={tt.content}>{tt.content}</a> : <p>{tt.content}</p>}
            >
                <span className={clsx("px-1 rounded-md",
                    color && color,
                    Boolean(props.light || props.faint || props.muted) && "bg-opacity-60 hl-faint"
                )} {..._props} />
            </ComposedTooltip>
        )
    }
    return (
        <span className={clsx("px-1 rounded-md",
            color && color
        )} {..._props} />
    )
}


Highlight.displayName = "Highlight"
