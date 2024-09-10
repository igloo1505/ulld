"use client"
import { useRouter } from 'next/navigation'
/* import { toggleEquationSelectMode } from '#/actions/ui' */
import { useEffect } from 'react'



interface HandleEquationClickProps {
    domId: string
    equationId: string
}

const HandleEquationClick = ({ domId, equationId }: HandleEquationClickProps) => {
    const router = useRouter()
    const equationClickListener = () => {
        router.push(`/equations/details/${equationId}`)
    }

    useEffect(() => {
        let em = document.getElementById(domId)
        if (em) {
            em.addEventListener("click", equationClickListener)
        }
        return () => em?.removeEventListener("click", equationClickListener)
    }, [])
    return null

}


HandleEquationClick.displayName = "HandleEquationClick"


export default HandleEquationClick;
