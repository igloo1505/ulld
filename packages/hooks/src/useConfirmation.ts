"use client";
import { useState } from "react";
import { ConfirmationModalConfig } from "@ulld/utilities/types";
import { useEventListener } from "@ulld/hooks/useEventListener";
import { getRandomId } from "@ulld/utilities/identity";

type ConfirmationStatus = "pending-user-interaction" | "denied" | "accepted" | "waiting";

interface EventProps {
    confirmationId: string;
}

declare global {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface WindowEventMap {
        "confirmation-accept": CustomEvent<EventProps>;
        "confirmation-denied": CustomEvent<EventProps>;
        "quietly-close-confirm-modal": CustomEvent<EventProps>;
        "show-confirmation-dialog": CustomEvent<{
            config: ConfirmationModalConfig | false | null;
            id: string | number;
        }>;
    }
}

export const useConfirmationConfig = () => {
    const [config, setConfig] = useState<null | ConfirmationModalConfig>(null);
    const [confirmationId, setConfirmationId] = useState<null | string | number>(
        null,
    );

    const clearConfig = () => {
        setConfig(null);
        setConfirmationId(null);
    };

    useEventListener("show-confirmation-dialog", (e) => {
        if (e.detail.config && e.detail.config.body) {
            if (!confirmationId || confirmationId === e.detail.id) {
                setConfig(e.detail.config);
                setConfirmationId(e.detail.id)
            }
        } else {
            clearConfig();
        }
    });

    const handleConfirm = () => {
        window.dispatchEvent(
            new CustomEvent("confirmation-accept", {
                detail: {
                    confirmationId: confirmationId || config?.primaryId,
                },
            }),
        );
        clearConfig()
    };

    const handleDeny = () => {
        window.dispatchEvent(
            new CustomEvent("confirmation-denied", {
                detail: {
                    confirmationId: confirmationId || config?.primaryId,
                },
            }),
        );
        clearConfig()
    };

    return [config, handleConfirm, handleDeny, clearConfig] as [
        typeof config,
        typeof handleConfirm,
        typeof handleDeny,
        typeof clearConfig,
    ];
};

export const useConfirmation = (
    config: ConfirmationModalConfig & {
        onConfirm?: () => void;
        onReject?: () => void;
    },
) => {
    const [status, setStatus] = useState<ConfirmationStatus>("waiting");
    const [confirmationId, setConfirmationId] = useState(
        config.primaryId || `confirmation-${getRandomId()}`,
    );

    useEventListener("confirmation-accept", (e) => {
        if (e.detail.confirmationId === confirmationId) {
            setStatus("accepted");
            if (config.onConfirm) {
                config.onConfirm();
            }
        }
    });

    useEventListener("confirmation-denied", (e) => {
        if (e.detail.confirmationId === confirmationId) {
            setStatus("denied");
            if (config.onReject) {
                config.onReject();
            }
        }
    });

    const closeConfirmationModal = () => { 
            setStatus("waiting")
            window.dispatchEvent(
                new CustomEvent("quietly-close-confirm-modal", {
                    detail: {
                        confirmationId,
                    },
                }),
            );
        }

    const handleRequestConfirm = () => {
        if (confirmationId) {
            setConfirmationId(confirmationId);
        }
        if (config) {
            setStatus("pending-user-interaction")
            window.dispatchEvent(
                new CustomEvent("show-confirmation-dialog", {
                    detail: {
                        config: config,
                        confirmationId: confirmationId,
                    },
                }),
            );
        } else {
            closeConfirmationModal()
        }
    };

    return {
        requestConfirmation: handleRequestConfirm,
        closeConfirmationModal: closeConfirmationModal,
        status: status,
    } satisfies {
        requestConfirmation: () => void;
        closeConfirmationModal: () => void;
        status: ConfirmationStatus;
    };
};
