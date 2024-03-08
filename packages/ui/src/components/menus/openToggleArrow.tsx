"use client"
import { ChevronDown } from 'lucide-react'
import React from 'react'



interface OpenToggleArrowProps {
    groupId?: string
    openClass?: string
}

const OpenToggleArrow = (props: OpenToggleArrowProps) => {
    const toggleOpen = () => {
        if (!props.groupId) return
        document.getElementById(props.groupId)?.classList.toggle(props.openClass || "open")
    }
    return (
        <ChevronDown className={"cursor-pointer group-[.open]:rotate-180 transition-transform duration-300 group-data-[state=open]/fold:rotate-180"} onClick={toggleOpen} />
    )
}


OpenToggleArrow.displayName = "OpenToggleArrow"


export default OpenToggleArrow;
