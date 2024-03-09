"use client"
import React from 'react'
import { Button, ButtonProps, useToast } from '@ulld/tailwind/base'
import { CopyIcon } from 'lucide-react'
import { createCopyListener } from '@ulld/state'
import { ToastConfigType } from '@ulld/utilities'



interface CopyTextButtonProps {
    children: string | React.ReactNode
    copyText: string
    withIcon?: boolean
    toast?: ToastConfigType
    buttonProps?: ButtonProps
}


export const CopyTextButton = ({ children, withIcon, buttonProps = {}, copyText, toast: _toast }: CopyTextButtonProps) => {
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
        >
            {withIcon && <CopyIcon className="mr-2 h-4 w-4" />}
            {children}
        </Button>
    )
}


CopyTextButton.displayName = "CopyTextButton"


