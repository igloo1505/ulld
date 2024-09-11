import React from 'react'
import { isLocal } from '@ulld/utilities/isLocal'
import { readAppConfigSync } from '@ulld/developer/readAppConfig'



interface LocalOnlyWrapperProps {
    children: React.ReactNode
}

const LocalOnlyWrapper = ({ children }: LocalOnlyWrapperProps) => {
    const config = readAppConfigSync()
    const _isLocal = isLocal(config.fsRoot)
    if (!_isLocal) return null
    return (
        <div className={"note-base-layout"}>{children}</div>
    )
}


LocalOnlyWrapper.displayName = "LocalOnlyWrapper"


export default LocalOnlyWrapper;
