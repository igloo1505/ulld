import { useState, useEffect } from "react"

export const useInitialRender = () => {
    const [isInitial, setIsInitial] = useState(true)
    useEffect(() => {
        setIsInitial(false)
    }, [])
    return isInitial
}
