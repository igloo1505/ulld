"use client"
import { setCanBookmarkState } from '@ulld/state/actions/clientOnly/dom'
import { useEffect } from 'react'



interface ContentListPageObserverProps {
}

const ContentListPageObserver = ({ }: ContentListPageObserverProps) => {
    useEffect(() => {
        setCanBookmarkState(false)
    }, [])
    return null
}


ContentListPageObserver.displayName = "ContentListPageObserver"


export default ContentListPageObserver;
