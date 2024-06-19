import React, { HTMLProps } from "react";
import clsx from 'clsx'
import cn from "@ulld/utilities/cn";

interface HintProps extends HTMLProps<HTMLDivElement> {
    note?: boolean;
}

const Hint = ({ children, note, ...props }: HintProps) => {
    const label = note ? "Note" : "Hint";
    return (
        <div {...props} className={cn("text-sm mb-6", props.className)}>
            <span className={clsx("font-bold", label === "Hint" ? "text-hint" : "text-sky-400")}>{`${label}:`}</span>
            <span className={"text-sm pl-2 [&_*]:inline whitespace-break-spaces"}>
                {children}
            </span>
        </div>
    );
};

Hint.displayName = "Hint";

export default Hint;
