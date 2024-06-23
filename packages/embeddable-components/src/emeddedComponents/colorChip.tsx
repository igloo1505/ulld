import React, { HTMLProps } from 'react'
import { colorPropSchemaMap } from '../../../componentConfigs/src/subConfigs/colorMap'
import clsx from 'clsx'
import { PropColorSchemaInput } from '../../../componentConfigs/src/subConfigs/colors'


interface ColorChipProps extends HTMLProps<HTMLSpanElement>{
    color: keyof PropColorSchemaInput | string
    size?: number
    width?: number
    height?: number
}

export const ColorChip = ({color, className, size=16, width, height, ...props}: ColorChipProps) => {
return (
    <span 
            {...props}
            style={{
                ...props.style,
                width: `${width || size}px`,
                height: `${height || size}px`,
                backgroundColor: color in colorPropSchemaMap ? colorPropSchemaMap[color as keyof typeof colorPropSchemaMap] : color
            }}
            className={clsx("rounded-md inline-block", className)}
        />
)
}


ColorChip.displayName = "ColorChip"
