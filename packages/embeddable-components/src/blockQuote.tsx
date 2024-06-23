import React from "react";


interface Props extends React.HTMLAttributes<HTMLQuoteElement> {
}

const BlockQuote = ({ children, ...props }: Props) => {
    return (
        <blockquote {...props} className={"not-prose mt-6 border-l-[4px] border-l-primary pl-2"}>
            {children}
        </blockquote>
    );
};

BlockQuote.displayName = "BlockQuote";

export default BlockQuote;
