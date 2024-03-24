import React from 'react'
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from "@ulld/tailwind/context-menu"
import { BundledTheme } from 'shiki'
import { availableShikiThemes } from '@ulld/configschema/zod/codeConfig'


interface CodeThemeContextMenuProps {
    children: React.ReactNode
    onThemeChange: (s: BundledTheme) => void
}

const CodeThemeContextMenu = ({ children, onThemeChange }: CodeThemeContextMenuProps) => {
    return (
        <ContextMenu >
            <ContextMenuTrigger>{children}</ContextMenuTrigger>
            <ContextMenuContent className={"max-h-[300px] overflow-y-auto no-scrollbar"}>
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
