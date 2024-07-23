import cn from "@ulld/utilities/cn";
import React, { ReactNode } from "react";

interface MobileSheetFooterProps {
    children: ReactNode;
    className?: string;
}

export const MobileSheetFooter = ({
    children,
    className,
}: MobileSheetFooterProps) => {
    return <div className={cn("px-4 sm:px-8 pb-4 sm:pb-6 flex flex-row justify-end items-center gap-4")}>{children}</div>;
};

MobileSheetFooter.displayName = "MobileSheetFooter";
