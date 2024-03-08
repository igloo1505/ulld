import clsx from 'clsx'
import React from 'react'
import { WithTooltipWrapper, getToolTipWrapperContent } from './Hl'
import { PropColor, getPropColor } from '#/lib/ui/getPropColor'
import Tooltip from '#/components/ui/tooltip'

type Props = {
    thin?: boolean
    thick?: boolean
} & Record<keyof PropColor, boolean> & WithTooltipWrapper

const Underline = ({ thin, thick, ...props }: Props) => {
    let { color, props: _props } = getPropColor(props, "underline")
    let tt = getToolTipWrapperContent(props)
    if (tt) {
        return (
            <Tooltip content={tt.isLink ? <a href={tt.content}>{tt.content}</a> : <p>{tt.content}</p>}>
                <span className={clsx(
                    "underline underline-offset-2",
                    thick && "decoration-4",
                    thin && "decoration-1",
                    Boolean(!thin && !thick) && "decoration-2",
                    color && color
                )} {..._props} />
            </Tooltip>
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


export default Underline;
