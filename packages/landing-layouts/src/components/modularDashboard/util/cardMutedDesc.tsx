import cn from "@ulld/utilities/cn";
import React, { HTMLProps, ReactNode } from "react";

interface CardMutedDescProps extends HTMLProps<HTMLDivElement> {
    children: ReactNode;
    right?: ReactNode
}

const CardMutedDesc = ({
    children,
    className,
    right,
    ...props
}: CardMutedDescProps) => {
    return (
        <div
            {...props}
            className={cn(
                "text-[10px] px-2 text-muted-foreground h-6 min-h-6 w-full flex flex-row justify-between items-center",
                className,
            )}
        >
            <span>{children}</span>
            <span>
                {right}
            </span>
        </div>
    );
};

CardMutedDesc.displayName = "CardMutedDesc";

export default CardMutedDesc;
