import React from "react";

/**
 * Used to indicate the error margin of a nearby calculation.
 * @example
 * ```tsx
 * <ErrorMargin>
 * 0.002%
 * </ErrorMargin>
 * ```
 * ### Output
 * <ErrorMargin>
 * 0.002%
 * </ErrorMargin>
 */
interface ErrorMarginProps {
    children: string;
    /** Whether error content should be colored with the app's 'error' color. */
    errorText?: boolean
}

export const ErrorMargin = ({children, errorText}: ErrorMarginProps) => {
    return (
        <div
            className={"w-fit h-fit pl-1 mb-2 leading-none text-sm flex flex-row justify-start items-center gap-[1ch] border-l-[3px] border-error"}
        >
            <span
                className={"font-semibold inline text-foreground"}
            >
                Error Margin:
            </span>
            <span className={errorText ? "text-error" : ""}>{children}</span>
        </div>
    );
};

ErrorMargin.displayName = "ErrorMargin";
