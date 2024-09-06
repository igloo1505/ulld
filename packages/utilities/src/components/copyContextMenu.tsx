"use client"
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from '@ulld/tailwind/context-menu'
import React from 'react'
import { copyStringToClipboard } from '../actions/copyStringToClipboard.js'
import { removeMathDollarSigns } from '../utils/stringUtils.js'
import { cn } from '../utils/cn.js'



interface CopyContextMenuProps {
    children: React.ReactNode
    content: string
    btnLabel?: string
    extraMenuItems?: React.FC<{}>
    removeMathWrapper?: boolean
    classes?: {
        menuContent?: string
    }
}

export const CopyContextMenu = ({ children, removeMathWrapper, content, btnLabel, extraMenuItems, classes = {} }: CopyContextMenuProps) => {
    const ExtraMenuItems = extraMenuItems
    return (
        <ContextMenu>
            <ContextMenuTrigger>
                {children}
            </ContextMenuTrigger>
            <ContextMenuContent
                className={cn("w-64", classes.menuContent)}
            >
                <ContextMenuItem
                    inset
                    onClick={async () => copyStringToClipboard(removeMathWrapper ? removeMathDollarSigns(content) : content)}
                >
                    {btnLabel || "Copy latex"}
                </ContextMenuItem>
                {ExtraMenuItems && <ExtraMenuItems />}
            </ContextMenuContent>
        </ContextMenu>

    )
}


CopyContextMenu.displayName = "CopyContextMenu"
