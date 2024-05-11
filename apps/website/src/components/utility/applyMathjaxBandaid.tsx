"use client"
import { useMathjaxBandaid } from '@ulld/hooks/useMathjaxBandaid'
import { RefObject } from 'react'



interface ApplyMathjaxBandaidProps {
    container: RefObject<HTMLElement> | string
}

const ApplyMathjaxBandaid = ({container}: ApplyMathjaxBandaidProps) => {
    useMathjaxBandaid(container)
    return null
}


ApplyMathjaxBandaid.displayName = "ApplyMathjaxBandaid"


export default ApplyMathjaxBandaid;
