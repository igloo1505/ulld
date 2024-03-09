import { useEffect, useState } from "react"

export const useViewport = () => {
    const [viewport, setViewport] = useState<(DOMRect & { window: { width: number, height: number } }) | null>(null)
    const handleViewport = () => {
        let d = document.body?.getBoundingClientRect()
        setViewport({
            ...d,
            window: {
                width: window.innerWidth,
                height: window.innerHeight
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
