"use client"
import { useEffect, useState } from 'react'


interface TikzColorHandlerProps {
    id: string
    foreground?: boolean
    primary?: boolean
}

const getChildren = (em: HTMLElement) => {
    return em.querySelectorAll("g,text")
}

const overwriteColors: string[] = [
    '#000',
    '#000000',
    'rgb(0,0,0)',
    'rgb(0, 0, 0)',
    '#fff',
    '#ffffff',
    'rgb(255,255,255)',
    'rgb(255, 255, 255)',
    'none'
]

const filterChildrenByExistingStyles = (ems: NodeListOf<Element>) => {
    let filtered: Element[] = []
    ems.forEach((el) => {
        let styles = window.getComputedStyle(el)
        if (overwriteColors.includes(styles.stroke)) {
            filtered.push(el)
        }
    })
    return filtered
}


const applyColor = (em: HTMLElement, primary: boolean, foreground: boolean) => {
    if (primary) {
        em.style.stroke = `hsl(var(--primary))`
    } else if (foreground) {
        em.style.stroke = `hsl(var(--foreground))`
    }
}

/* TODO: Handle the default tikz colors the same way, but map them to internal css variables that respond to dark mode and the app's theme. */
const TikzColorHandler = ({ id, primary, foreground }: TikzColorHandlerProps) => {
    const [hasSetStyles, setHasSetStyles] = useState(false)
    const handleTikzColor = () => {
        if ((!primary && !foreground) || hasSetStyles) return
        let parent = document.getElementById(id)
        if (!parent) return
        let children = filterChildrenByExistingStyles(getChildren(parent))
        if (children.length === 0) return
        children.forEach((s) => applyColor(s as HTMLElement, Boolean(primary), Boolean(foreground)))
        setHasSetStyles(true)
        let pl = document.getElementById(`${id}-placeholder`)
        if (pl) {
            pl.style.display = "none"
        }
    }

    useEffect(() => {
        if (!id || !document) return
        let em = document.getElementById(id)
        if (!em) return
        let observer = new MutationObserver((mutations) => {
            if (mutations.map((m) => m.type).includes("childList") && (foreground || primary)) {
                handleTikzColor()
            }
        })

        observer.observe(em, {
            childList: true,
            subtree: true
        })

    }, [id])

    return null
}


TikzColorHandler.displayName = "TikzColorHandler"


export default TikzColorHandler;
