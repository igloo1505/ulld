import React, { HTMLProps } from "react";
import clsx from "clsx";
import {
    getColorPropsData,
    PropColorInput,
} from "@ulld/component-configs/colors";

interface ColorChipProps
    extends Omit<HTMLProps<HTMLSpanElement>, "background" | "popover">,
    PropColorInput {
    color?: string;
    size?: number;
    width?: number;
    height?: number;
}

export const ColorChip = ({
    color,
    className,
    size = 16,
    width,
    height,
    ...props
}: ColorChipProps) => {
    const colorData = getColorPropsData(props, "primary");
    let colorValue = color ? color : colorData.color;
    let {popover, ...otherProps} = props
    return (
        <span
            {...otherProps}
            style={{
                ...props.style,
                width: `${width || size}px`,
                height: `${height || size}px`,
                backgroundColor: colorValue,
            }}
            className={clsx("rounded-md inline-block", className)}
        />
    );
};

ColorChip.displayName = "ColorChip";
