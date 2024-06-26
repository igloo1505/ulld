import React from 'react'
import axios from 'axios'
import {convertGithubUrlToRawContentUrl} from "@ulld/state/formatting/general"
import { MdxContentSERVER } from '@ulld/render/mdx/server'



interface RemoteMarkdownProps {
    url: string
    src?: string
    source?: string
    className?: string
}



/* TODO: Work on getting this to work. This would be a pretty big value add, right after plotting with ip-widget-like interfaces. */
export const RemoteMarkdown = async ({ url, src, source, className }: RemoteMarkdownProps) => {
    let fp = src || source || url
    let content = await axios.get(fp.includes("github") ? convertGithubUrlToRawContentUrl(fp) : fp)
    return (
        <MdxContentSERVER content={content.data} className={className} />
    )
}


RemoteMarkdown.displayName = "RemoteMarkdown"
