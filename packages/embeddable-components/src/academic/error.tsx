import React from "react";

/**
 * Takes no properties directly, but can wrap content to indicate an error margin for a nearby calculation.
 * @example
 * ```tsx
 * <ErrorMargin>
 * 0.002%
 * </ErrorMargin>
 * ```
 */
interface ErrorMarginProps {
    children: string;
}

export const ErrorMargin = ({children}: ErrorMarginProps) => {
    return (
        <div
            className={"text-error w-fit h-fit pl-1 mb-2 leading-none text-sm flex flex-row justify-start items-center gap-[1ch] border-l-[3px] border-error"}
        >
            <span
                className={"font-semibold inline text-foreground"}
            >
                Error Margin:
            </span>
            <span>{children}</span>
        </div>
    );
};

ErrorMargin.displayName = "ErrorMargin";
