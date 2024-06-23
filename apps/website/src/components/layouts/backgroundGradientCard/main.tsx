import React, { ComponentPropsWithoutRef, ForwardedRef, HTMLProps, ReactNode, forwardRef } from "react";
import { BackgroundGradient } from "./backgroundGradient";
import cn from "@ulld/utilities/cn";

interface BackgroundGradientCardProps extends ComponentPropsWithoutRef<typeof BackgroundGradient> {
    children: ReactNode;
}

export const BackgroundGradientCard = ({children, className, ...props}: BackgroundGradientCardProps) => {
    return <BackgroundGradient
        className={cn("rounded-3xl p-4 sm:p-6 bg-card", className)}
        {...props}
    >
        {children}
    </BackgroundGradient>;
}

BackgroundGradientCard.displayName = "BackgroundGradientCard";
