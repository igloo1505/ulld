"use client"
import { XIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'



interface ClientSideXIconProps {
    className?: string
    backOnClick?: boolean
}

export const ClientSideXIcon = ({ className, backOnClick }: ClientSideXIconProps) => {
    const router = useRouter()
    return (
        <XIcon
            className={className}
            onClick={() => backOnClick && router.back()}
        />
    )
}


ClientSideXIcon.displayName = "ClientSideXIcon"


