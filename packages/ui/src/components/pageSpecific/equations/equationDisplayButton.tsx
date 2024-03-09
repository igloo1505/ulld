"use client"
import { buttonVariants } from '@ulld/tailwind'
import { withForwardSlash, makeHref } from '@ulld/utilities'
import clsx from 'clsx'
import { Route } from 'next'
import { RedirectType, redirect, useRouter } from 'next/navigation'
import React from 'react'



interface EquationDetailLinkButtonProps {
    children: React.ReactNode
    href: Route
    variant?: "outline" | "ghost" | "link"
    isModal?: boolean
    className?: string
}

const EquationDetailLinkButton = ({ children, className, isModal, href, variant }: EquationDetailLinkButtonProps) => {
    const router = useRouter()
    const handleClick = () => {
        let newHref = `${window.location.host}${withForwardSlash(href)}`
        window.location.href = makeHref(`${window.location.host}${withForwardSlash(href)}`)
    }

    return (
        <a
            role="button"
            className={clsx("w-full cursor-pointer", className, buttonVariants({ variant: "outline" }))}
            onClick={handleClick}
        >
            {children}
        </a>
    )
}


EquationDetailLinkButton.displayName = "EquationDetailLinkButton"


export default EquationDetailLinkButton;
