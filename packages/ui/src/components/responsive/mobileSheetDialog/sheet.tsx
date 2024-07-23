import React from "react";
import { MobileSheetDesktopDialogProps } from "./main";
import {
    MobileSheetTitle,
    MobileSheetContent,
    MobileSheetHeader,
    MobileSheet,
    MobileSheetDesc,
    MobileSheetPortal,
    MobileSheetFooter,
} from "../../mobile/sheet/main";

interface MobileSheetInDialogSwitchProps
    extends Omit<MobileSheetDesktopDialogProps, "breakpoint"> { }

export const MobileSheetInDialogSwitch = ({
    children,
    title,
    desc,
    open,
    onOpenChange,
    footer,
    classes,
}: MobileSheetInDialogSwitchProps) => {
    return (
        <MobileSheetPortal>
            <MobileSheet
                open={open}
                onOpenChange={onOpenChange}
                className={classes?.sheet?.container}
            >
                <MobileSheetHeader className={classes?.sheet?.header}>
                    {title && (
                        <MobileSheetTitle className={classes?.sheet?.title}>
                            {title}
                        </MobileSheetTitle>
                    )}
                    {desc && (
                        <MobileSheetDesc className={classes?.sheet?.desc}>
                            {desc}
                        </MobileSheetDesc>
                    )}
                </MobileSheetHeader>
                <MobileSheetContent className={classes?.sheet?.content}>
                    {children}
                </MobileSheetContent>
                {footer && (
                    <MobileSheetFooter className={classes?.sheet?.footer}>
                        {footer}
                    </MobileSheetFooter>
                )}
            </MobileSheet>
        </MobileSheetPortal>
    );
};

MobileSheetInDialogSwitch.displayName = "MobileSheetInDialogSwitch";
