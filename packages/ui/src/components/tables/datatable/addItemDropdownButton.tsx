import { CommandItem } from 'cmdk';
import { Route } from 'next';
import { useRouter } from 'next/navigation';
import React from 'react'



interface AddItemDropdownButtonProps {
    href: Route
    label: string
}

const AddItemDropdownButton = ({ href, label }: AddItemDropdownButtonProps) => {
    const router = useRouter()
    return (
        <CommandItem
            className={"cursor-pointer w-full text-center text-sm text-muted py-2 px-2 hover:text-foreground hover:bg-muted transition-colors duration-200"}
            onClick={() => router.push(href)}
        >
            {label}
        </CommandItem>
    )
}


AddItemDropdownButton.displayName = "AddItemDropdownButton"


export default AddItemDropdownButton;
