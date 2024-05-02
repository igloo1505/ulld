"use client"
import clsx from 'clsx';
import React from 'react'



interface TabButtonProps {
    title: string,
    index: number
    groupId: string
}

const TabButton = ({ title, index, groupId }: TabButtonProps) => {
    const handleClick = () => {
        let em = document.getElementById(groupId)
        if (!em) return
        em.classList.forEach((c) => {
            if (c.startsWith("active-")) {
                em?.classList.remove(c)
            }
        })
        em.classList.add(`active-${index}`)
    }
    return (
        <div className={clsx("px-4 py-3 rounded-tl-lg cursor-pointer rounded-tr-lg bg-gray-200 dark:bg-gray-700 text-black dark:text-white", `tab-btn-${index}`)} onClick={handleClick}>{title}</div>
    )
}


TabButton.displayName = "TabButton"


export default TabButton;
