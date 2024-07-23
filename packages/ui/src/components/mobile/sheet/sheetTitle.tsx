import cn from "@ulld/utilities/cn";
import React, { ReactNode } from "react";

interface MobileSheetTitleProps {
    children: ReactNode;
    className?: string
}

export const MobileSheetTitle = ({ children, className }: MobileSheetTitleProps) => {
    return <div className={cn("text-lg font-semibold", className)}>{children}</div>;
};

MobileSheetTitle.displayName = "MobileSheetTitle";
