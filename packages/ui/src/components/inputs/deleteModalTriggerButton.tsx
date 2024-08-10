"use client"
import React from 'react'
import { ConfirmationModalConfig } from "@ulld/utilities/types";
import { showConfirmationModal } from '@ulld/state/slices/ui'
import clsx from 'clsx'
import { XIcon } from 'lucide-react'
import { useConfirmation } from "@ulld/hooks/useConfirmation"



interface DeleteModalTriggerButtonProps {
    config: ConfirmationModalConfig
    className?: string
}


/* TODO: Remove all references to this component everywhere. This will no longer function. */
export const DeleteModalTriggerButton = ({ className, config }: DeleteModalTriggerButtonProps) => {

    const confirm = useConfirmation(config)

    const showDeleteModal = () => {
        confirm.
        /* window.ulldStore.dispatch(showConfirmationModal(config)) */
    }

    return (
        <XIcon
            className={clsx("h-4 w-4 cursor-pointer", className && className)}
            onClick={showDeleteModal}
        />
    )
}


DeleteModalTriggerButton.displayName = "DeleteModalTriggerButton"
