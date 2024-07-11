"use client"
import React from 'react'
import { Button, ButtonProps } from '@ulld/tailwind/button'
import { useRouter } from 'next/navigation'



interface RouteModalBackButtonProps extends ButtonProps {
    text?: string
    children?: React.ReactNode
}

export const RouteModalBackButton = ({ text, children, ...props }: RouteModalBackButtonProps) => {
    const router = useRouter()
    return (
        <Button
            {...props}
            onClick={() => router.back()} >
            {children || text || "Close"}
        </Button>
    )
}


RouteModalBackButton.displayName = "RouteModalBackButton"
