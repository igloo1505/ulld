"use client"
import React, { useState } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem,  DropdownMenuTrigger } from '@ulld/tailwind/base';
import { DropdownOptionType } from '../layout/uniqueLayouts/datatable/datatableFilterButton';



interface WithDropdownTriggerProps {
    children: React.ReactNode
    options: (DropdownOptionType & { onClick: (opt: DropdownOptionType) => void })[]
}

const WithDropdownTrigger = ({ children, options }: WithDropdownTriggerProps) => {
    const [open, setOpen] = useState(false)
    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
                {options.map((o) => {
                    return (
                        <DropdownMenuItem key={o.label as string} onClick={() => o.onClick(o)}>
                            {o.icon && <o.icon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />}
                            {o.label}
                        </DropdownMenuItem>
                    )
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


WithDropdownTrigger.displayName = "WithDropdownTrigger"


export default WithDropdownTrigger;
