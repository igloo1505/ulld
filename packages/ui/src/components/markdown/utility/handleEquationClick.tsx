"use client"
import { toggleEquationSelectMode } from '@ulld/state'
import { useEffect } from 'react'



interface HandleEquationClickProps {
    id: string
}

const HandleEquationClick = ({ id }: HandleEquationClickProps) => {
    const cancelEquationIdState = () => {
        toggleEquationSelectMode(false)
    }

    useEffect(() => {
        let em = document.getElementById(id)
        if (em) {
            em.addEventListener("click", cancelEquationIdState)
        }
        return () => em?.removeEventListener("click", cancelEquationIdState)
    }, [])
    return null

}


HandleEquationClick.displayName = "HandleEquationClick"


export default HandleEquationClick;
