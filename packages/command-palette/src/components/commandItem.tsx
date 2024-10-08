import React from 'react'
import { Command } from 'cmdk'
import { pages } from './commandPaletteUtilities'
import { Route } from 'next'
import { useRouter } from 'next/navigation'


export interface CommandPaletteItemProps {
    children: React.ReactNode
    onSelect?: ((s?: string) => void) | ({ push: Route })
    value?: string | pages
    keymap?: string[]
    parent?: pages
    isParent?: boolean
    isEmptyParent?: boolean // Use value as search input defined in onSelect
    isTextSearch?: boolean
    activePage?: pages
    href?: Route
    keywords?: string
    setPage?: (s: pages) => void
    close: () => void
    extraProps?: Omit<React.HTMLAttributes<HTMLDivElement>, "disabled" | "onSelect" | "value">
}


const CommandPaletteItem = ({ children, close, setPage, isParent, isEmptyParent, isTextSearch, onSelect, value, keymap, parent, activePage, extraProps }: CommandPaletteItemProps) => {
    const router = useRouter()
    if ((parent && parent !== activePage) || (activePage && !parent)) return null

    let props: React.HTMLAttributes<HTMLDivElement> & any = {
        onSelect: () => {
            if (isParent && setPage) {
                setPage(value as pages)
            } else if (onSelect) {
                if (typeof onSelect === "object" && onSelect.push) {
                    router.push(onSelect.push)
                } else if (typeof onSelect === "function") {
                    onSelect(value)
                }
            }
            if (!isParent && !isEmptyParent) close()
        },
        value: value || undefined,
        ...extraProps
    }


    return (
        <Command.Item
            {...props}
            data-casevalue={value}
        >
            {children}
        </Command.Item>
    )
}


CommandPaletteItem.displayName = "CommandPaletteItem"


export default CommandPaletteItem;
