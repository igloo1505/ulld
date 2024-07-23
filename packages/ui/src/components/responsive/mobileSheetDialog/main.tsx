"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { DeviceType } from "@ulld/utilities/types";
import { validateDeviceType } from "@ulld/utilities/validateDeviceType";
import { MobileSheetInDialogSwitch } from "./sheet";
import { DialogMobileSheet } from "./dialog";

export interface MobileSheetDesktopDialogProps {
    children: ReactNode;
    title?: ReactNode;
    desc?: ReactNode;
    footer?: ReactNode;
    open: boolean;
    onOpenChange?: (newOpen: boolean) => void;
    /** Breakpoint as a number will be applied so that larger viewport widths show the modal. If it is a DeviceType or DeviceType array, it will show the mobile if it evaluates to true for any of the DeviceTypes provided.  */
    breakpoint: number | DeviceType | DeviceType[];
    classes?: {
        dialog?: {
            container?: string;
        };
        sheet?: {
            container?: string
            header?: string
            title?: string
            desc?: string
            content?: string
            footer?: string
        }
    };
}

export const MobileSheetDesktopDialog = ({
    breakpoint,
    ...props
}: MobileSheetDesktopDialogProps) => {
    const [showMobileSheet, setShowMobileSheet] = useState(false);

    const handleViewportBreakpoint = () => {
        if (typeof breakpoint !== "number") {
            return;
        }
        setShowMobileSheet(window.innerWidth <= breakpoint);
    };

    useEffect(() => {
        if (typeof breakpoint !== "number") {
            return setShowMobileSheet(validateDeviceType(breakpoint));
        }
        handleViewportBreakpoint();
        window.addEventListener("resize", handleViewportBreakpoint);
        return () => window.removeEventListener("resize", handleViewportBreakpoint);
    }, [breakpoint]);

    if (showMobileSheet) {
        return <MobileSheetInDialogSwitch {...props} />;
    }
    return <DialogMobileSheet {...props} />;
};

MobileSheetDesktopDialog.displayName = "MobileSheetDesktopDialog";
