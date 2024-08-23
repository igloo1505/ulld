"use client"
import React, { useEffect } from 'react'


export const DisableBookmark = () => {
    useEffect(() => {
        document.body.classList.remove("canBookmark");
    }, [])
    return null
}


DisableBookmark.displayName = "DisableBookmark"
