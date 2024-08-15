import { useState, useEffect } from "react";
import { ConfirmationModalConfig } from "@ulld/utilities/types";
import { useEventListener } from "@ulld/hooks/useEventListener";
import { getRandomId } from "@ulld/utilities/identity";

type S = "pending" | "denied" | "accepted" | "waiting";

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

export const useConfirmationConfig = (confirmationId?: string | number) => {
    const [config, setConfig] = useState<null | ConfirmationModalConfig>(null);
    useEventListener("show-confirmation-dialog", (e) => {
        if (e.detail.config && e.detail.config.body) {
            if (!confirmationId || confirmationId === e.detail.id) {
                setConfig(e.detail.config);
            }
        } else {
            setConfig(null);
        }
    });
    return config;
};

export const useConfirmation = (
    config: ConfirmationModalConfig & {
        onConfirm?: () => void;
        onReject?: () => void;
    },
) => {
    const [modalOpen, setModalOpen] = useState<string | number | boolean>(false);
    const [status, setStatus] = useState<S>("waiting");
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

    const handleRequestConfirm = (
        confirmationId: string | number,
        config?: ConfirmationModalConfig | null | false,
    ) => {
        if (confirmationId) {
            setConfirmationId(confirmationId);
        }
        if (config) {
            window.dispatchEvent(
                new CustomEvent("show-confirmation-dialog", {
                    detail: {
                        config: config,
                        confirmationId: confirmationId,
                    },
                }),
            );
        } else {
            window.dispatchEvent(
                new CustomEvent("quietly-close-confirm-modal", {
                    detail: {
                        confirmationId,
                    },
                }),
            );
        }
    };

    return {
        open: Boolean(modalOpen),
        requestConfirmation: handleRequestConfirm,
        closeConfirmationModal: () => setModalOpen(false),
        status: status,
    } satisfies {
        open: boolean;
        requestConfirmation: (
            confirmationId: string | number,
            config: ConfirmationModalConfig,
        ) => void;
        closeConfirmationModal: () => void;
        status: S;
    };
};
