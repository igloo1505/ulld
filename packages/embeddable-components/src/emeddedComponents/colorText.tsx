import React from 'react'
import { WithTooltipWrapper } from './Hl'
import { getPropColor } from '@ulld/state/actions/ui/getPropColor'
import { PropColor } from '@ulld/utilities/shadColorMap'



type ColorTextProps = {

} & Record<keyof PropColor, boolean> & WithTooltipWrapper

export const ColorText = ({children, ...props}: ColorTextProps) => {
    let { color, props: _props } = getPropColor(props, "text")
    return (
        <span
        className={color}
        >{children}</span>
    )
}


ColorText.displayName = "ColorText"