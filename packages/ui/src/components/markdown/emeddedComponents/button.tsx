"use client"
import { MarkdownButtonActions, markdownActionsMap } from '@ulld/state'
import { ButtonProps as ShadButtonProps, Button as ShadButton } from '@ulld/tailwind/base'
import React from 'react'



interface ButtonProps {
    children: React.ReactNode
    btnProps?: ShadButtonProps
    action: MarkdownButtonActions
    target?: string
}



export const Button = ({ children, btnProps = {}, action, target }: ButtonProps) => {
    const handleClick = () => {
        markdownActionsMap[action](target)
    }

    return (
        <ShadButton
            onClick={handleClick}
            {...btnProps}
        >{children}</ShadButton>
    )
}


Button.displayName = "Button"
