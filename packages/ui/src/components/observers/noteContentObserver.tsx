"use client"
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { handleMathjaxClassesRetroactively } from '../../actions/client/handleMathjaxClassesRetroactively'



interface NoteContentObserverProps {
    id: string
}


/* WARNING: This is almost sure to not work properly. Still needs a lot of refinement and like 5 mins of testing once this unbelievably awful dev server is in better shape. */
const NoteContentObserver = ({ id }: NoteContentObserverProps) => {
    console.log(`NoteContentObserver`)
    const [mutObserver, setMutObserver] = useState<null | MutationObserver>(null)
    const pathname = usePathname()
    const disconnectObserver = (ob?: MutationObserver | null) => {
        console.log('Disconnecting mutation observer')
        ob?.disconnect()
        mutObserver?.disconnect()
    }

    const setMutationObserver = () => {
        let obs = handleMathjaxClassesRetroactively({ id }, () => {
            disconnectObserver()
        })
        if (mutObserver) {
            mutObserver.disconnect()
        }
        setMutObserver(obs)
        return obs
    }

    useEffect(() => {
        const obs = setMutationObserver()
        return () => disconnectObserver(obs)
    }, [id, pathname])

    return null
}


NoteContentObserver.displayName = "NoteContentObserver"


export default NoteContentObserver;
