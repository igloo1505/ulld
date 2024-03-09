"use client"
import { getRandomId, replaceRecursively } from '@ulld/utilities'
import { useEffect, useState } from 'react'


interface EquationReferenceProps {
    id: string
    defaultContent?: string | number
}


export const EquationReference = ({ id: _id, defaultContent }: EquationReferenceProps) => {
    const [labelNumber, setLabelNumber] = useState<string | null>(null)
    const id = _id ? _id : getRandomId(16)
    const getLabel = () => {
        let em = document.getElementById(`eqRef-${id}`)
        if (!em) return
        let labelEm = em.querySelector("mjx-labels")
        if (!labelEm) return
        let labelItems = labelEm.querySelectorAll("mjx-c")
        if (!labelItems || labelItems.length === 0) return
        let parsedItems: string[] = []
        labelItems.forEach((l) => {
            let styles = window.getComputedStyle(l, ':before')
            let content = styles['content'];
            let label = parseInt(replaceRecursively(content, /\"|\'/gm, ""))
            if (!Number.isNaN(label)) {
                parsedItems.push(`${label}`)
            }
        })
        setLabelNumber(parsedItems.join(""))
    }

    useEffect(() => {
        console.log("id: ", id)
        if (!document || !id) return
        let em = document.getElementById(`eqRef-${id}`)
        if (!id || !em) return
        getLabel()
        let observer = new MutationObserver((mutations) => {
            if (mutations.map((m) => m.type).includes("childList")) {
                getLabel()
            }
        })
        observer.observe(em, {
            childList: true,
            subtree: true
        })
    }, [id])

    if (!labelNumber) return defaultContent || null
    return labelNumber
}


EquationReference.displayName = "EquationReference"


