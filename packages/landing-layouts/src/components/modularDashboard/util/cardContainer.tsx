import React, { HTMLProps, ReactNode } from "react";
import cn from "@ulld/utilities/cn";

interface CardContainerProps extends HTMLProps<HTMLDivElement> {
    children: ReactNode;
}

const CardContainer = ({ children, ...props }: CardContainerProps) => {
    return (
        <div
            {...props}
            className={cn(
                "w-full relative border border-border rounded h-full flex flex-col justify-center items-center",
                props.className,
            )}
        >
            {children}
        </div>
    );
};

CardContainer.displayName = "CardContainer";

export default CardContainer;
