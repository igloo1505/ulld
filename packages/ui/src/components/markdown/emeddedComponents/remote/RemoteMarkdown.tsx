import React from 'react'
import axios from 'axios'
import {convertGithubUrlToRawContentUrl} from "@ulld/state/formatting/general"
import { MdxContentSERVER } from '../../../mdxContent/mdxContentSERVER'



interface RemoteMarkdownProps {
    url: string
    src?: string
    source?: string
    className?: string
}


export const RemoteMarkdown = async ({ url, src, source, className }: RemoteMarkdownProps) => {
    let fp = src || source || url
    let content = await axios.get(fp.includes("github") ? convertGithubUrlToRawContentUrl(fp) : fp)
    return (
        <MdxContentSERVER content={content.data} className={className} />
    )
}


RemoteMarkdown.displayName = "RemoteMarkdown"
