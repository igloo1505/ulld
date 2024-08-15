"use client";
import React from "react";
import { client } from "@ulld/api/client";
import { useConfirmation } from "@ulld/hooks/useConfirmation";
import cn from "@ulld/utilities/cn";
import { XIcon } from "lucide-react";

interface EquationListItemDeleteButtonProps {
    equationId: number;
    className?: string;
}

const EquationListItemDeleteButton = ({
    equationId,
    className,
}: EquationListItemDeleteButtonProps) => {
    const confirmationId = `confirm-delete-eq-${equationId}`;
    const handleConfirm = async () => {
        await client.equations.deleteEquationById.mutate(equationId);
    };

    const confirm = useConfirmation({
        title: "Delete Equation?",
        body: "This cannot be undone.",
        buttonText: "Delete",
        primaryId: equationId,
        buttonVariant: "destructive",
        onConfirm: handleConfirm,
    });

    const showConfirmationModal = () => {
        confirm.requestConfirmation(confirmationId);
    };

    return (
        <XIcon
            className={cn("h-4 w-4 cursor-pointer", className && className)}
            onClick={showConfirmationModal}
        />
    );
};

EquationListItemDeleteButton.displayName = "EquationListItemDeleteButton";

export default EquationListItemDeleteButton;
