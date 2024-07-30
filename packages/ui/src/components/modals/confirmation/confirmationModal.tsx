"use client";
import React from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import { RootState } from "@ulld/state/store";
import {useConfirmationConfig} from "@ulld/hooks/useConfirmation"
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
import { ConfirmationModalConfig } from "@ulld/utilities/types"
import { showConfirmationModal } from "@ulld/state/slices/ui";
import { useUlldStore } from "@ulld/hooks/useUlldStore";
import { ConfirmationModalProps } from "../../../types/general";

export type { ConfirmationModalConfig };

const connector = connect((state: RootState, props: any) => ({
    config: state.UI.modals.confirmationModal,
    props: props,
}));


interface EventProps {
    confirmationId: string;
}

declare global {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface WindowEventMap {
        "confirmation-accept": CustomEvent<EventProps>;
        "confirmation-denied": CustomEvent<EventProps>;
    }
}

const ConfirmationModal = connector((props: ConfirmationModalProps) => {
    const { toast } = useToast();
    const config = useConfirmationConfig()
    const store = useUlldStore();
    const closeModal = () => store?.dispatch(showConfirmationModal(false));

    return (
        <Dialog
            open={Boolean(config)}
            onOpenChange={(open: boolean) => {
                if (!open) {
                    closeModal();
                    if(config){
                    window.dispatchEvent(
                        new CustomEvent("confirmation-denied", {
                            detail: { confirmationId: config.primaryId },
                        }),
                    );
                    }
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
                        {config.showDenyButton && (
                        <Button
                            onClick={() => {
                                if (config.toast) {
                                    toast(config.toast);
                                }
                                if (config.domId) {
                                    document.getElementById(config.domId)?.remove();
                                }
                                if (config.onConfirmCallback) {
                                    config.onConfirmCallback(config);
                                }
                                window.dispatchEvent(
                                    new CustomEvent("confirmation-denied", {
                                        detail: { confirmationId: config.primaryId },
                                    }),
                                );
                                closeModal();
                            }}
                            variant={config.buttonVariant || undefined}
                            className={clsx(
                                config.buttonVariant === "destructive" &&
                                "focus-visible:ring-destructive",
                            )}
                        >
                            Decline
                        </Button>
                        )}
                        <Button
                            onClick={() => {
                                if (config.toast) {
                                    toast(config.toast);
                                }
                                if (config.domId) {
                                    document.getElementById(config.domId)?.remove();
                                }
                                if (config.onConfirmCallback) {
                                    config.onConfirmCallback(config);
                                }
                                window.dispatchEvent(
                                    new CustomEvent("confirmation-accept", {
                                        detail: { confirmationId: config.primaryId },
                                    }),
                                );
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
