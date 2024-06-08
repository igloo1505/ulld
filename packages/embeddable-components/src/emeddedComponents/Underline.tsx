import clsx from "clsx";
import React, { HTMLProps } from "react";
import { getToolTipWrapperContent } from "./Hl";
import { ComposedTooltip } from "./composedTooltip";
import { componentConfig } from "@ulld/component-configs/underline";
import { UnderlineProps } from "./props/underlineProps";
import { WithTooltipWrapper } from "./props/withTooltipWrapperProps";
import { PropColorInput } from "@ulld/component-configs/colors";


type ULProps = UnderlineProps & WithTooltipWrapper & HTMLProps<HTMLSpanElement> & PropColorInput

export const Underline = (p: ULProps) => {
    const props = componentConfig.parse(p);
    /* TODO: Move this to the zod object. */
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
                    {...props}
                    className={clsx(
                        "underline underline-offset-2",
                        p.className
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
            className={clsx(
                "underline underline-offset-2",
                p.className
            )}
            {...props}
            style={{
                ...props.css,
                ...p.style,
            }}
        />
    );
};

Underline.displayName = "Underline";
