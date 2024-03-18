"use client"
import { useState } from "react"

export const useComponentSize = <T extends Element>(ref: React.RefObject<T>) => {
    const [rect, setRect] = useState<DOMRect | null>(null)
    const listener = new ResizeObserver((entries, observer) => {
        setRect(ref.current?.getBoundingClientRect() || null)
    })
    if (ref.current) listener.observe(ref.current)
    return rect
}
