import React, { ForwardedRef, HTMLProps, ReactNode, forwardRef } from "react";
import cn from "@ulld/utilities/cn";

interface CardContainerProps extends HTMLProps<HTMLDivElement> {
    children: ReactNode;
}

const CardContainer = forwardRef(({ children, ...props }: CardContainerProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div
            {...props}
            className={cn(
                "w-full bg-card relative border border-border rounded h-full flex flex-col justify-center items-center",
                props.className,
            )}
            ref={ref}
        >
            {children}
        </div>
    );
});

CardContainer.displayName = "CardContainer";

export default CardContainer;
