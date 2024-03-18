"use client"
import { useEffect, useState } from 'react'
import { useIsomorphicLayoutEffect } from './useIsomorphicEffect'


type UseLockedBodyOutput = [boolean, (locked: boolean) => void]

export const useLockBodyScroll = (
    initialLocked = false,
    rootId = 'Ulld-body-root',
): UseLockedBodyOutput => {
    const [locked, setLocked] = useState(initialLocked)
    useIsomorphicLayoutEffect(() => {
        if (!locked) {
            return
        }
        const originalOverflow = document.body.style.overflow
        const originalPaddingRight = document.body.style.paddingRight
        document.body.style.overflow = 'hidden'
        const root = document.getElementById(rootId) // or root
        const scrollBarWidth = root ? root.offsetWidth - root.scrollWidth : 0
        if (scrollBarWidth) {
            document.body.style.paddingRight = `${scrollBarWidth}px`
        }
        return () => {
            document.body.style.overflow = originalOverflow
            if (scrollBarWidth) {
                document.body.style.paddingRight = originalPaddingRight
            }
        }
    }, [locked])
    useEffect(() => {
        if (locked !== initialLocked) {
            setLocked(initialLocked)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialLocked])

    return [locked, setLocked]
}
