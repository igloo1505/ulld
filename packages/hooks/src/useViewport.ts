import { useEffect, useState } from "react"

export interface ViewportData {
window: {
        width: number
        height: number
        aspectRatio: number
    }
    }

export const useViewport = () => {
    const [viewport, setViewport] = useState<ViewportData | null>(null)
    const handleViewport = () => {
        let d = document.body?.getBoundingClientRect()
        setViewport({
            ...d,
            window: {
                width: window.innerWidth,
                height: window.innerHeight,
                aspectRatio: window.innerWidth / window.innerHeight
            }
        })
    }

    useEffect(() => {
        handleViewport()
        window.addEventListener("resize", handleViewport)
        window.addEventListener("scroll", handleViewport)
        return () => {
            window.removeEventListener("resize", handleViewport)
            window.removeEventListener("scroll", handleViewport)
        }
    }, [])
    return viewport
}
