"use client"
import { ConfirmationModalConfig } from '@ulld/state/actions/confirmation/confirmationModalConfig'
import { showConfirmationModal } from '@ulld/state/slices/ui'
import clsx from 'clsx'
import { XIcon } from 'lucide-react'
import React from 'react'



interface DeleteModalTriggerButtonProps {
    config: ConfirmationModalConfig
    className?: string
}

export const DeleteModalTriggerButton = ({ className, config }: DeleteModalTriggerButtonProps) => {

    const showDeleteModal = () => {
        window.ulldStore.dispatch(showConfirmationModal(config))
    }

    return (
        <XIcon
            className={clsx("h-4 w-4 cursor-pointer", className && className)}
            onClick={showDeleteModal}
        />
    )
}


DeleteModalTriggerButton.displayName = "DeleteModalTriggerButton"
