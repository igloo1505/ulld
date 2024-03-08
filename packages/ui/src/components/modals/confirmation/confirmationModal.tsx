"use client"
import React from 'react'
import { connect } from 'react-redux';
import clsx from 'clsx';
import { RootState, initialState, store, showConfirmationModal } from '@ulld/state';
import { confirmationFunctions } from './confirmationModalConfig';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, Button, useToast } from '@ulld/tailwind/base'



const connector = connect((state: RootState, props: any) => ({
    config: state.UI.modals.confirmationModal,
    props: props
}))



interface ConfirmationModalProps {
    config: typeof initialState['UI']['modals']['confirmationModal']
}



const ConfirmationModal = connector(({ config }: ConfirmationModalProps) => {
    const { toast } = useToast()
    const closeModal = () => store.dispatch(showConfirmationModal(false))

    return (
        <Dialog
            open={Boolean(config)}
            onOpenChange={(open: boolean) => {
                if (!open) {
                    closeModal()
                }
            }}
        >
            {config && <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{config.title}</DialogTitle>
                    <DialogDescription>
                        {config.body}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button
                        onClick={() => {
                            confirmationFunctions[config.onConfirm](config)
                            if (config.toast) {
                                toast(config.toast)
                            }
                            if (config.domId) {
                                document.getElementById(config.domId)?.remove()
                            }
                            if (config.onConfirmCallback) {
                                config.onConfirmCallback(config)
                            }
                            closeModal()
                        }}
                        variant={config.buttonVariant || undefined}
                        className={clsx(config.buttonVariant === "destructive" && "focus-visible:ring-destructive")}
                    >{config.buttonText || "Accept"}</Button>
                </DialogFooter>
            </DialogContent>}

        </Dialog>
    )
})



ConfirmationModal.displayName = "ConfirmationModal"



export default ConfirmationModal;
