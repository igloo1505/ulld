import React, { ReactNode } from "react";
import { useMobileSheetContext } from "./sheetProvider";

interface MobileSheetHeaderProps {
    children: ReactNode;
    className?: string;
}

export const MobileSheetHeader = ({ children }: MobileSheetHeaderProps) => {
    const state = useMobileSheetContext();
    return (
        <div className={"w-full relative p-4 sm:px-8 select-none"}>
            <div className={"h-4 w-full flex flex-row justify-center items-center"}>
                <div
                    className={"cursor-pointer w-[120px] h-2 rounded-full bg-secondary mb-4"}
                    style={{
                        touchAction: "none",
                    }}
                    onPointerDown={(e) => {
                        if (state.controls) {
                            console.log(`Starting controls`);
                            state.controls.start(e);
                        }
                    }}
                />
            </div>
            {children}
        </div>
    );
};

MobileSheetHeader.displayName = "MobileSheetHeader";
