"use client"
import { ButtonProps as ShadButtonProps, Button as ShadButton } from '#/components/shad/ui/button'
import { MarkdownButtonActions } from '#/lib/actions/markdownActions/markdownActionsEnum'
import { markdownActionsMap } from '#/lib/actions/markdownActions/markdownActionsMap'
import React from 'react'



interface ButtonProps {
    children: React.ReactNode
    btnProps?: ShadButtonProps
    action: MarkdownButtonActions
    target?: string
}



const Button = ({ children, btnProps = {}, action, target }: ButtonProps) => {
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


export default Button;
