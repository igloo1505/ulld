"use client"
import { XIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { ComponentPropsWithoutRef } from 'react'



interface ClientSideXIconProps extends ComponentPropsWithoutRef<typeof XIcon> {
    className?: string
    backOnClick?: boolean
}

export const ClientSideXIcon = ({ backOnClick, ...props }: ClientSideXIconProps) => {
    const router = useRouter()
    return (
        <XIcon
            {...props}
            onClick={() => backOnClick && router.back()}
        />
    )
}


ClientSideXIcon.displayName = "ClientSideXIcon"


