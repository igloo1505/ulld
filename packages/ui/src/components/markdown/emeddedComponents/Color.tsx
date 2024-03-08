import { PropColor, getPropColor } from '#/lib/ui/getPropColor'
import React from 'react'
import { WithTooltipWrapper } from './Hl'



type ColorTextProps = {

} & Record<keyof PropColor, boolean> & WithTooltipWrapper

const ColorText = (props: ColorTextProps) => {
    let { color, props: _props } = getPropColor(props, "text")
    return (
        <span></span>
    )
}


ColorText.displayName = "ColorText"


export default ColorText;
