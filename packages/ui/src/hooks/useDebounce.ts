import { useState, useEffect } from "react"


export const useDebounce = <T extends unknown>(initialValue: T, timeout: number, onBounce: (value: T) => void) => {
    const [value, setValue] = useState<T>(initialValue)
    const [hasBounced, setHasBounced] = useState(false)
    const [timer, setTimer] = useState<NodeJS.Timeout>(setTimeout(() => {
        if (!value || value === "" || (Array.isArray(value) && value.length === 0)) return
        if (hasBounced) return
        onBounce(value)
        setHasBounced(true)
    }, timeout || 1000))
    useEffect(() => {
        setHasBounced(false)
        setTimer(setTimeout(() => {
            if (!value || value === "" || (Array.isArray(value) && value.length === 0)) return
            if (hasBounced) return
            onBounce(value)
            setHasBounced(true)
        }, timeout || 1000))
    }, [value])

    return {
        value,
        setValue
    }
}
