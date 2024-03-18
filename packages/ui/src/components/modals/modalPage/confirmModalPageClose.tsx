"use client"
import React, { useEffect } from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@ulld/tailwind/alert-dialog";

export interface ConfirmModalPageCloseProps {
    open: boolean;
    cancel: () => void;
    closeModalPage: () => void;
    closeConfirmationBody?: string
    closeConfirmationTitle?: string
}

const ConfirmModalPageClose = ({
    open,
    cancel,
    closeModalPage,
    closeConfirmationBody,
    closeConfirmationTitle
}: ConfirmModalPageCloseProps) => {
    const keyListener = (e: KeyboardEvent) => {
        if(e.key === "Enter" && e.shiftKey) {
            e.preventDefault()
            e.stopPropagation()
            closeModalPage()
        }    
        }

    useEffect(() => {
       window.addEventListener("keydown", keyListener) 
       return () => window.removeEventListener("keydown", keyListener) 
    }, [])

    return (
        <AlertDialog open={open} onOpenChange={(o) => o === false && cancel()}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{closeConfirmationTitle  || "Are you absolutely sure?" }</AlertDialogTitle>
                    {closeConfirmationBody && <AlertDialogDescription>
                        {closeConfirmationBody}
                    </AlertDialogDescription>}
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel
                        onClick={cancel}
                    >Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={closeModalPage}
                    >Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

ConfirmModalPageClose.displayName = "ConfirmModalPageClose";

export default ConfirmModalPageClose;
