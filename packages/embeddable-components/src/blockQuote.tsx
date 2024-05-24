import clsx from "clsx";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLQuoteElement> {
    author?: string;
    border?: boolean
    card?: boolean
}

const BlockQuote = ({ children, author, border, card, ...props }: Props) => {
    return (
        <div
            className={"w-auto flex flex-col justify-center items-center not-prose"}
        >
            <div
                className={
                    clsx("w-auto max-w-[min(600px,83%)] flex flex-col justify-center items-center gap-4 p-4", border && "border", card && "bg-card")
                }
            >
                <blockquote className={"italic"}>
                    {children}
                </blockquote>
                <div className={"w-full px-6 italic"}>{`~ ${author}`}</div>
            </div>
        </div>
    );
};

BlockQuote.displayName = "BlockQuote";

export default BlockQuote;
