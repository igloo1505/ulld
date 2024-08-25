import React, { HTMLProps } from "react";
import { ComposedTooltip } from "./composedTooltip";
import { componentConfig } from "@ulld/component-configs/highlight";
import { WithTooltipWrapper } from "./props/withTooltipWrapperProps";
import { HighlightProps } from "./HlProps";
import cn from "@ulld/utilities/cn";

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


export const Highlight = (
    p: HighlightProps & WithTooltipWrapper & Omit<HTMLProps<HTMLDivElement>, "children">,
) => {
    const props = componentConfig.parse(p);
    /* let { color, props: _props } = getPropColor(props, "bg", "yellow") */
    let tt = getToolTipWrapperContent(p);
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
                    {...p}
                    className={cn(
                        "px-1 rounded-md highlight-background highlight-text [&_*]:text-inherit [&_*]:bg-inherit",
                        (p.faint || p.light) && "bg-opacity-50",
                        p.muted && "text-muted-foreground",
                        p.className,
                        /* Boolean(props.light || props.faint || props.muted) && "bg-opacity-60 hl-faint" */
                    )}
                    style={{
                        ...props.css,
                        ...p.style,
                    }}
                />
            </ComposedTooltip>
        );
    }
    return (
        <span
            {...p}
            className={cn(
                "px-1 rounded-md highlight-background highlight-text [&_*]:text-inherit [&_*]:bg-inherit",
                (p.faint || p.light) && "bg-opacity-50",
                p.muted && "text-muted-foreground",
                p.className,
            )}
            style={{
                ...props.css,
                ...p.style,
            }}
        />
    );
};

Highlight.displayName = "Highlight";
