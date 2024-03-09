"use client"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@ulld/tailwind/base'
import React from 'react'



interface VideoTimestampLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    videoId?: string
    timeStamp?: string
}

const getTimestampInSeconds = (t: string) => {
    let s = t.split(":").map((n) => parseInt(n)).reverse()
    let n = s[0]
    if (s[1]) {
        n += s[1] * 60
    }
    if (s[2]) {
        n += s[2] * 3600
    }
    return n
}

export const VideoTimestampLink = ({ timeStamp, videoId, children }: VideoTimestampLinkProps) => {
    const handleTimestampClick = () => {
        if (!timeStamp || !videoId) return
        let em = document.getElementById(`video-${videoId}`) as HTMLVideoElement
        if (!em) {
            em = document.getElementById(videoId) as HTMLVideoElement
        }
        if (!em) return
        let t = getTimestampInSeconds(timeStamp)
        if (!em || !t) return
        em.currentTime = t
    }
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <a role="button" onClick={handleTimestampClick} className={"text-sky-500 dark:text-sky-400"}>{children}</a>
                </TooltipTrigger>
                <TooltipContent>
                    {`#${videoId} at ${timeStamp}`}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}


VideoTimestampLink.displayName = "VideoTimestampLink"
