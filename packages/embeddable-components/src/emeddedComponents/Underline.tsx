import clsx from 'clsx'
import React from 'react'
import { WithTooltipWrapper, getToolTipWrapperContent } from './Hl'
import { getPropColor } from '@ulld/state/actions/ui/getPropColor'
import { PropColor } from '@ulld/utilities/shadColorMap'
import { ComposedTooltip } from './composedTooltip'



type Props = {
    thin?: boolean
    thick?: boolean
} & Record<keyof PropColor, boolean> & WithTooltipWrapper

export const Underline = ({ thin, thick, ...props }: Props) => {
    let { color, props: _props } = getPropColor(props, "underline")
    let tt = getToolTipWrapperContent(props)
    if (tt) {
        return (
            <ComposedTooltip content={tt.isLink ? <a href={tt.content}>{tt.content}</a> : <p>{tt.content}</p>}>
                <span className={clsx(
                    "underline underline-offset-2",
                    thick && "decoration-4",
                    thin && "decoration-1",
                    Boolean(!thin && !thick) && "decoration-2",
                    color && color
                )} {..._props} />
            </ComposedTooltip>
        )
    }
    return (
        <span className={clsx(
            "underline underline-offset-2",
            thick && "decoration-4",
            thin && "decoration-1",
            Boolean(!thin && !thick) && "decoration-2",
            color && color
        )} {..._props} />
    )

}


Underline.displayName = "Underline"
