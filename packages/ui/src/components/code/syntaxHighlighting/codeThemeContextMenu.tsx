import React from 'react'
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from "@ulld/tailwind/context-menu"
import { BundledTheme } from 'shiki'
import { availableShikiThemes } from '@ulld/configschema/codeThemeSchemas'


interface CodeThemeContextMenuProps {
    children: React.ReactNode
    onThemeChange: (s: BundledTheme) => void
    className?: string
}

const CodeThemeContextMenu = ({ children, onThemeChange, className }: CodeThemeContextMenuProps) => {
    return (
        <ContextMenu>
            <ContextMenuTrigger
                className={className}
            >{children}</ContextMenuTrigger>
            <ContextMenuContent
                className={"max-h-[300px] overflow-y-auto no-scrollbar"}>
                {availableShikiThemes.map((s) => {
                    return (
                        <ContextMenuItem
                            key={s}
                            onClick={() => onThemeChange(s)}
                        >{s}</ContextMenuItem>
                    )
                })}
            </ContextMenuContent>
        </ContextMenu >
    )
}


CodeThemeContextMenu.displayName = "CodeThemeContextMenu"


export default CodeThemeContextMenu;
