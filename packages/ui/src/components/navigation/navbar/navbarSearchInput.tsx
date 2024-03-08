"use client"
import { useRouter } from 'next/navigation'
import React, { useRef, useState } from 'react'
import { Input } from '@ulld/tailwind/base'
import { getSearchAllUrl, onEnter } from '@ulld/state'


const NavbarSearchInput = () => {
    const [query, setQuery] = useState("")
    const ref = useRef<HTMLInputElement>(null!)
    const router = useRouter()
    const search = () => {
        router.push(getSearchAllUrl({ query }))
        setQuery("")
        ref.current.blur()
    }
    return (
        <Input
            value={query}
            ref={ref}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => onEnter(e, search)}
            type="search"
            className={"pl-10 w-full"}
            placeholder="Search..."
        />
    )
}


NavbarSearchInput.displayName = "NavbarSearchInput"


export default NavbarSearchInput;
