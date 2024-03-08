"use client"
import React from 'react'
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from '#/components/shad/ui/context-menu'
import { copyStringToClipboard } from '#/utils/interaction/copyString'


interface EquationContextMenuProps {
    children: React.ReactNode
    python?: string
    equationId?: string
    latex?: string
}

const EquationContextMenu = ({ children, python, latex }: EquationContextMenuProps) => {
    if (!python) return children // Add more checks here as capabilities grow
    return (
        <ContextMenu>
            <ContextMenuTrigger>
                {children}
            </ContextMenuTrigger>
            <ContextMenuContent
                className="w-64"
            >
                {python && <ContextMenuItem
                    inset
                    onClick={async () => copyStringToClipboard(python)}
                >
                    Copy Python
                </ContextMenuItem>}
                {latex && <ContextMenuItem
                    inset
                    onClick={async () => copyStringToClipboard(latex)}
                >
                    Copy Latex
                </ContextMenuItem>}
            </ContextMenuContent>
        </ContextMenu>
    )
}


EquationContextMenu.displayName = "EquationContextMenu"


export default EquationContextMenu;
