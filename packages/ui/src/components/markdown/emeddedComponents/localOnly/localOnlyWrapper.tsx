import { getInternalConfig } from '@ulld/configschema/zod/getInternalConfig'
import React from 'react'
import { isLocal } from '../../../../utilityFunctions/isLocal'



interface LocalOnlyWrapperProps {
    children: React.ReactNode
}

const LocalOnlyWrapper = ({ children }: LocalOnlyWrapperProps) => {
    const config = getInternalConfig()
    const _isLocal = isLocal(config.fsRoot)
    console.log("_isLocal: ", _isLocal)
    if (!_isLocal) return null
    return (
        <div className={"note-base-layout"}>{children}</div>
    )
}


LocalOnlyWrapper.displayName = "LocalOnlyWrapper"


export default LocalOnlyWrapper;
