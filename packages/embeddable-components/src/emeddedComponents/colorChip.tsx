"use client";
import React, { HTMLProps, useMemo } from "react";
import clsx from "clsx";
import {
    getColorPropsData,
    PropColorInput,
} from "@ulld/component-configs/colors";
import { useAppConfig } from "@ulld/hooks/useAppConfig";
import { useClientDarkMode } from "@ulld/hooks/useClientDarkMode";

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
    let colorString = color ? color : colorData.color;
    let { popover, ...otherProps } = props;
    const [appConfig] = useAppConfig();
    const darkMode = useClientDarkMode();

    const colorValue = useMemo(() => {
        if (!appConfig) {
            return colorString;
        }
        return colorString in appConfig.UI.colors
            ? appConfig.UI.colors[colorString]?.[darkMode ? "dark" : "light"] ||
            appConfig.UI.colors[colorString]?.[darkMode ? "light" : "dark"]
            : colorString;
    }, [darkMode, appConfig]);

    if (!appConfig || !colorValue) {
        return null;
    }

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
