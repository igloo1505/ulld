"use client"
import { htmlEm, setCanBookmarkState } from '@ulld/state/actions/clientOnly/dom'
import { useEffect } from 'react'



interface ContentItemPageObserverProps {
    canBookmark?: boolean
    notebook?: boolean
}

const ContentItemPageObserver = ({ canBookmark, notebook }: ContentItemPageObserverProps) => {
    useEffect(() => {
        let em = htmlEm()
        if (!em) return
        em.classList[notebook ? "add" : "remove"]("notebook-view")
    }, [notebook])

    useEffect(() => {
        setCanBookmarkState(canBookmark || false)
    }, [canBookmark])

    return <></>
}


ContentItemPageObserver.displayName = "ContentItemPageObserver"


export default ContentItemPageObserver;
