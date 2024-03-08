import React from 'react'
import { Command } from 'cmdk'


interface CommandPaletteSubItemProps {
    currentPage: string
    parent: string
    label: string
    onSelect: (s: string) => void
    value?: string
}

const CommandPaletteSubItem = ({ currentPage, parent, label, value, onSelect }: CommandPaletteSubItemProps) => {
    if (currentPage !== parent) return null
    return (
        <Command.Item
            onSelect={onSelect}
            value={value || label}
        >{label}</Command.Item>
    )
}


CommandPaletteSubItem.displayName = "CommandPaletteSubItem"


export default CommandPaletteSubItem;
