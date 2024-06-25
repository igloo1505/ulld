import React, { HTMLProps } from "react";
import { getPropColor } from "@ulld/state/actions/ui/getPropColor";
import { PropColor } from "@ulld/utilities/shadColorMap";
import { WithTooltipWrapper } from "./props/withTooltipWrapperProps";
import clsx from "clsx";
import { getToolTipWrapperContent } from "./Hl";
import { ComposedTooltip } from "./composedTooltip";
import { propColorSchemaTransform } from "@ulld/component-configs/colors";

type ColorTextProps = {} & Record<keyof PropColor, boolean> &
    WithTooltipWrapper &
    HTMLProps<HTMLDivElement>;

export const ColorText = ({ children, ...props }: ColorTextProps) => {
    let { color, props: _props } = getPropColor(props, "text");
    let tt = getToolTipWrapperContent(props);
    let data = propColorSchemaTransform(props as any, "foreground");
    if (tt) {
        return (
            <ComposedTooltip
                content={
                    tt.isLink ? (
                        <a href={tt.content}>{tt.content}</a>
                    ) : (
                        <p>{tt.content}</p>
                    )
                }
            >
                <span
                    className={color}
                    style={{
                        color: data.color,
                    }}
                >
                    {children}
                </span>
            </ComposedTooltip>
        );
    }
    return (
        <span
            className={color}
            style={{
                color: data.color,
            }}
        >
            {children}
        </span>
    );
};

ColorText.displayName = "ColorText";
