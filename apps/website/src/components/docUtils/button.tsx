import { ButtonProps } from "@ulld/tailwind/button";
import React from "react";

interface InternalTagProps extends ButtonProps { }

const InternalTag = ({ children, ...props }: InternalTagProps) => {
    return (
        <a
            role="button"
            className="queryLink queryTag"
        >{`#${children}`}</a>
    );
};

InternalTag.displayName = "InternalTag";

export default InternalTag;
