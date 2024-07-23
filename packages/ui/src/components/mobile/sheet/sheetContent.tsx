import React, { ReactNode } from "react";

interface MobileSheetContentProps {
    children: ReactNode;
    className?: string
}

export const MobileSheetContent = ({ children, className }: MobileSheetContentProps) => {
    return (
    <div 
            className={"p-4 sm:px-8 sm:pb-8 overflow-y-auto min-scrollbar"}
        >
            {children}
        </div>
    )
};

MobileSheetContent.displayName = "MobileSheetContent";
