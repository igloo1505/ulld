"use client"
import { resetCollapsablePanels } from '@ulld/state/actions/clientOnly/general'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'




const ResetPathDependentComponents = () => {
    const pathname = usePathname()
    useEffect(() => {
        resetCollapsablePanels(pathname)
    }, [pathname])
    return (
        <></>
    )
}


ResetPathDependentComponents.displayName = "ResetPathDependentComponenets"


export default ResetPathDependentComponents;
