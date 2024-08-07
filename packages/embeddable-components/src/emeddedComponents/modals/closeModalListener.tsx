"use client"
import React, { useEffect } from 'react'
import { DynamicIcon } from '@ulld/icons/dynamic'



interface CloseModalListenerProps {
    id: string
}

const CloseModalListener = ({ id }: CloseModalListenerProps) => {

    const closeModal = () => {
        let em1 = document.getElementById(id)
        em1?.classList.remove("open")
    }

    const appendListener = () => {
        let em = document.getElementById(id)
        if (!em) return
        em.addEventListener("click", closeModal)
    }

    useEffect(() => {
        appendListener()
    }, [])

    return (
        <DynamicIcon
            name="x"
            className={"w-4 h-4 absolute top-2 right-2 cursor-pointer"}
            role="button"
            onClick={closeModal}
        />
    )
}


CloseModalListener.displayName = "CloseModalListener"


export default CloseModalListener;
