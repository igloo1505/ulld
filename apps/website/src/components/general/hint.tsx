import React, { HTMLProps } from "react";
import clsx from 'clsx'

interface HintProps extends HTMLProps<HTMLDivElement> {
    note?: boolean;
}

const Hint = ({ children, note, ...props }: HintProps) => {
    const label = note ? "Note" : "Hint";
    return (
        <div className={"text-sm mb-6"} {...props}>
            <span className={clsx("font-bold", label === "Hint" ? "text-hint" : "text-sky-400")}>{`${label}:`}</span>
            <span className={"text-sm pl-2 [&_*]:inline whitespace-break-spaces"}>
                {children}
            </span>
        </div>
    );
};

Hint.displayName = "Hint";

export default Hint;
