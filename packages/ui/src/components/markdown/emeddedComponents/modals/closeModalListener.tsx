"use client"
import DynamicIcon from '#/components/icons/DynamicIcon'
import React, { useEffect } from 'react'



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
