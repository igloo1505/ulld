import cn from "@ulld/utilities/cn";
import React from "react";
import { useMobileSheetContext, useMobileSheetDispatch } from "./sheetProvider";

interface MobileSheetBackdropProps {
    className?: string;
}

export const MobileSheetBackdrop = ({
    className,
}: MobileSheetBackdropProps) => {
    const dispatch = useMobileSheetDispatch();
    const state = useMobileSheetContext()

    return (
        <div
            className={cn("bg-background w-screen h-screen fixed top-0 left-0 right-0 bottom-0 origin-bottom transition-opacity duration-300", className, state.open ? "scale-100 opacity-60" : "scale-0 opacity-0")}
            onClick={() => {
                dispatch({ type: "close" });
            }}
        />
    );
};

MobileSheetBackdrop.displayName = "MobileSheetBackdrop";
