import React from "react";
import { MobileSheetDesktopDialogProps } from "./main";
import {
    DialogHeader,
    DialogFooter,
    Dialog,
    DialogContent,
    DialogTitle,
    DialogDescription,
} from "@ulld/tailwind/dialog";

interface DialogMobileSheetProps
    extends Omit<MobileSheetDesktopDialogProps, "breakpoint"> { }

export const DialogMobileSheet = ({
    open,
    onOpenChange,
    children,
    desc,
    title,
    footer,
    classes,
}: DialogMobileSheetProps) => {
    return (
        <Dialog open={Boolean(open)} onOpenChange={onOpenChange}>
            <DialogContent 
                className={classes?.dialog?.content}
            >
                <DialogHeader className={classes?.dialog?.header}>
                    {title && (
                        <DialogTitle className={classes?.dialog?.title}>
                            {title}
                        </DialogTitle>
                    )}
                    {desc && (
                        <DialogDescription className={classes?.dialog?.desc}>
                            {desc}
                        </DialogDescription>
                    )}
                </DialogHeader>
                {children}
                {footer && (
                    <DialogFooter className={classes?.dialog?.footer}>
                        {footer}
                    </DialogFooter>
                )}
            </DialogContent>
        </Dialog>
    );
};

DialogMobileSheet.displayName = "DialogMobileSheet";
