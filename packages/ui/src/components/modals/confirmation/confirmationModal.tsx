"use client";
import React from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import { RootState } from "@ulld/state/store";
import { confirmationFunctions } from "./confirmationModalConfig";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@ulld/tailwind/dialog";
import { Button } from "@ulld/tailwind/button";
import { useToast } from "@ulld/tailwind/use-toast";
import { ConfirmationModalConfig } from "@ulld/state/actions/confirmation/confirmationModalConfig";
import { showConfirmationModal } from "@ulld/state/slices/ui";
import { useUlldStore } from "@ulld/hooks/useUlldStore";

export type { ConfirmationModalConfig };

const connector = connect((state: RootState, props: any) => ({
    config: state.UI.modals.confirmationModal,
    props: props,
}));

interface ConfirmationModalProps {
    config: ConfirmationModalConfig | false;
}


const ConfirmationModal = connector(({ config }: ConfirmationModalProps) => {
    const { toast } = useToast();
    const store = useUlldStore();
    const closeModal = () => store?.dispatch(showConfirmationModal(false));

    return (
        <Dialog
            open={Boolean(config)}
            onOpenChange={(open: boolean) => {
                if (!open) {
                    closeModal();
                }
            }}
        >
            {config && (
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>{config.title}</DialogTitle>
                        <DialogDescription>{config.body}</DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button
                            onClick={() => {
                                confirmationFunctions[config.onConfirm](config);
                                if (config.toast) {
                                    toast(config.toast);
                                }
                                if (config.domId) {
                                    document.getElementById(config.domId)?.remove();
                                }
                                if (config.onConfirmCallback) {
                                    config.onConfirmCallback(config);
                                }
                                closeModal();
                            }}
                            variant={config.buttonVariant || undefined}
                            className={clsx(
                                config.buttonVariant === "destructive" &&
                                "focus-visible:ring-destructive",
                            )}
                        >
                            {config.buttonText || "Accept"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            )}
        </Dialog>
    );
});

ConfirmationModal.displayName = "ConfirmationModal";

export default ConfirmationModal;
