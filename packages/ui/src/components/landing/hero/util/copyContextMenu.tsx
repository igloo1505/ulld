import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from '@ulld/tailwind/context-menu'
import { copyStringToClipboard } from '@ulld/utilities/copyStringToClipboard'
import React from 'react'



interface CopyContextMenuProps {
    children: React.ReactNode
    content: string
    btnLabel?: string
    extraMenuItems?: React.FC<{}>
}

const CopyContextMenu = ({ children, content, btnLabel, extraMenuItems }: CopyContextMenuProps) => {
    const ExtraMenuItems = extraMenuItems
    return (
        <ContextMenu>
            <ContextMenuTrigger>
                {children}
            </ContextMenuTrigger>
            <ContextMenuContent
                className="w-64"
            >
                <ContextMenuItem
                    inset
                    onClick={async () => copyStringToClipboard(content)}
                >
                    {btnLabel || "Copy latex"}
                </ContextMenuItem>
                {ExtraMenuItems && <ExtraMenuItems />}
            </ContextMenuContent>
        </ContextMenu>

    )
}


CopyContextMenu.displayName = "CopyContextMenu"


export default CopyContextMenu;
