import React from 'react'
import axios from 'axios'
import { convertGithubUrlToRawContentUrl } from '#/lib/formatting/general'
import MdxStringDisplayClient from '#/components/specificTypeDisplay/markdown/mdx/mdxStringDisplay'



interface RemoteMarkdownProps {
    url: string
    src?: string
    source?: string
    className?: string
}


const RemoteMarkdown = async ({ url, src, source, className }: RemoteMarkdownProps) => {
    let fp = src || source || url
    let content = await axios.get(fp.includes("github") ? convertGithubUrlToRawContentUrl(fp) : fp)
    return (
        <MdxStringDisplayClient content={content.data} className={className} />
    )
}


RemoteMarkdown.displayName = "RemoteMarkdown"


export default RemoteMarkdown;
