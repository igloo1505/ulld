import clsx from "clsx";
import React from "react";
import { PropColor } from "@ulld/utilities/shadColorMap";
import { ComposedTooltip } from "./composedTooltip";
import { componentConfig } from "@ulld/component-configs/underline";
import { WithTooltipWrapper } from "./props/withTooltipWrapperProps";


const ttIsLink = (t: string) => {
    return Boolean(/^(\/|http|www|\#)/gm.test(t));
};

export const getToolTipWrapperContent = (t: WithTooltipWrapper) => {
    let val: string | undefined = undefined;
    if (t.tooltip) {
        val = t.tooltip;
    }
    if (t.toolTip) {
        val = t.toolTip;
    }
    if (t.tt) {
        val = t.tt;
    }
    return val
        ? {
            content: val,
            isLink: t.toolTipAsLink || t.ttAslink || ttIsLink(val),
        }
        : false;
};

export interface HighlightProps extends Record<keyof PropColor, boolean> { }

export const Highlight = (
    p: HighlightProps &
        any &
        WithTooltipWrapper & { light?: boolean; faint?: boolean; muted?: boolean },
) => {
    const props = componentConfig.parse(p);
    /* let { color, props: _props } = getPropColor(props, "bg", "yellow") */
    let tt = getToolTipWrapperContent(props);
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
                    className={clsx(
                        "px-1 rounded-md",
                        props.className,
                        /* Boolean(props.light || props.faint || props.muted) && "bg-opacity-60 hl-faint" */
                    )}
                    {...p}
                    style={{
                        ...props.css,
                        backgroundColor: props.css?.textDecorationColor,
                        ...p.style,
                    }}
                />
            </ComposedTooltip>
        );
    }
    return (
        <span
            className={clsx("px-1 rounded-md", props.className)}
            {...p}
            style={{
                ...props.css,
                backgroundColor: props.css?.textDecorationColor,
                ...p.style,
            }}
        />
    );
};

Highlight.displayName = "Highlight";
