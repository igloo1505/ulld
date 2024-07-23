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
}: DialogMobileSheetProps) => {
    return (
        <Dialog open={Boolean(open)} onOpenChange={onOpenChange}>
            <DialogContent
                className={
                    "@container/editColorModal w-[min(768px,90vw)] max-w-[min(768px,90vw)]"
                }
            >
                <DialogHeader>
                    {title && <DialogTitle>{title}</DialogTitle>}
                    {desc && <DialogDescription>{desc}</DialogDescription>}
                </DialogHeader>
                {children}
                {footer && <DialogFooter>{footer}</DialogFooter>}
            </DialogContent>
        </Dialog>
    );
};

DialogMobileSheet.displayName = "DialogMobileSheet";
