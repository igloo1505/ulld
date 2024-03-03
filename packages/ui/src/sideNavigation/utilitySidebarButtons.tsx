import React from 'react'
import { DynamicIcon } from '..'
import SidebarButton from './sidebarButton'



interface Props {

}

export const SyncDirectorySidebarButton = () => {
    return (
        <SidebarButton item={{ onClick: syncRootDirectory, Icon: ({ className }: { className: string }) => <DynamicIcon name="folder-sync" className={className} /> }} />
    )
}
