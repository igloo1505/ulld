"use client"
import { store, showConfirmationModal } from '@ulld/state'
import clsx from 'clsx'
import { XIcon } from 'lucide-react'
import React from 'react'
import { ConfirmationModalConfig } from '..'



interface DeleteModalTriggerButtonProps {
    config: ConfirmationModalConfig
    className?: string
}

export const DeleteModalTriggerButton = ({ className, config }: DeleteModalTriggerButtonProps) => {

    const showDeleteModal = () => {
        store.dispatch(showConfirmationModal(config))
    }

    return (
        <XIcon
            className={clsx("h-4 w-4 cursor-pointer", className && className)}
            onClick={showDeleteModal}
        />
    )
}


DeleteModalTriggerButton.displayName = "DeleteModalTriggerButton"
