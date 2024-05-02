"use client"
import React from 'react'
import { Button, ButtonProps } from '@ulld/tailwind/button'
import {  useToast } from '@ulld/tailwind/use-toast'
import { CopyIcon } from 'lucide-react'
import { createCopyListener } from '@ulld/state/listeners/keydown'
import { ToastConfigType } from '@ulld/utilities/types/toastConfig'



interface CopyTextButtonProps {
    children: string | React.ReactNode
    copyText: string
    withIcon?: boolean
    toast?: ToastConfigType
    buttonProps?: ButtonProps
    className?: string
}


export const CopyTextButton = ({ children, withIcon, buttonProps = {}, copyText, toast: _toast, className}: CopyTextButtonProps) => {
    const { toast } = useToast()
    return (
        <Button
            {...buttonProps}
            onClick={createCopyListener(copyText, (e) => {
                toast(_toast || {
                    title: "Success",
                    description: "The text has been copied to your clipboard."
                })
                buttonProps.onClick && buttonProps.onClick(e)
            })}
            className={className}
        >
            {withIcon && <CopyIcon className="mr-2 h-4 w-4" />}
            {children}
        </Button>
    )
}


CopyTextButton.displayName = "CopyTextButton"
