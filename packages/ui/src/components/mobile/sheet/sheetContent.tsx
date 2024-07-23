import cn from "@ulld/utilities/cn";
import React, { ReactNode } from "react";

interface MobileSheetContentProps {
    children: ReactNode;
    className?: string;
}

export const MobileSheetContent = ({
    children,
    className,
}: MobileSheetContentProps) => {
    return (
        <div className={cn("px-8 pb-6 sm:pb-8 overflow-y-auto min-scrollbar flex-grow", className)}>
            {children}
        </div>
    );
};

MobileSheetContent.displayName = "MobileSheetContent";
