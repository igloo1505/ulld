import clsx from "clsx";
import React, { HTMLProps } from "react";
import { ComposedTooltip } from "./composedTooltip";
import { componentConfig } from "@ulld/component-configs/underline";
import { WithTooltipWrapper } from "./props/withTooltipWrapperProps";
import { HighlightProps } from "./HlProps";

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
                    className={clsx(
                        "px-1 rounded-md highlight-background highlight-text",
                        (p.faint || p.light) && "bg-opacity-50",
                        p.muted && "text-muted-foreground",
                        p.className,
                        /* Boolean(props.light || props.faint || props.muted) && "bg-opacity-60 hl-faint" */
                    )}
                    {...p}
                    style={{
                        ...props.css,
                        backgroundColor: props.color,
                        color: props.contrastColor,
                        ...p.style,
                    }}
                />
            </ComposedTooltip>
        );
    }
    return (
        <span
            {...p}
            className={clsx(
                "px-1 rounded-md highlight-background highlight-text",
                (p.faint || p.light) && "bg-opacity-50",
                p.muted && "text-muted-foreground",
                p.className,
            )}
            style={{
                ...props.css,
                backgroundColor: props.color,
                color: props.contrastColor,
                ...p.style,
            }}
        />
    );
};

Highlight.displayName = "Highlight";
