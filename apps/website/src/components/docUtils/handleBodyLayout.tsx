"use client"
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'



interface HandleBodyDisplayProps {

}

const contentsPages = [
    "/docs"
]

export const HandleBodyDisplay = (props: HandleBodyDisplayProps) => {
    const pathname = usePathname()
    useEffect(() => {
        let em = document.querySelector("body")
       if(contentsPages.some((f) => pathname.startsWith(f))){
            em?.setAttribute("data-disContents", "true")
        } else {
            em?.removeAttribute("data-disContents")
        }
    }, [pathname])
return null
}


HandleBodyDisplay.displayName = "HandleBodyDisplay"
