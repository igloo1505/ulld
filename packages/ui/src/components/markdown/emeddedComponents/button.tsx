"use client"
import { ButtonProps as ShadButtonProps, Button as ShadButton } from '@ulld/tailwind/button'
import React from 'react'
import {MarkdownButtonActions} from "@ulld/state/actions/clientOnly/markdownActions"


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
