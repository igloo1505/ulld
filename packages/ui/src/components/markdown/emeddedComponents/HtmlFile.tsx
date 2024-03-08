import { serverClient } from '#/trpc/serverClient'
import React from 'react'


interface HtmlFileProps {
    file: string
}


const HtmlFile = async ({ file }: HtmlFileProps) => {
    const fileContent = await serverClient.getUtf8File(file)
    return (
        <div dangerouslySetInnerHTML={{ __html: fileContent }} />
    )
}


HtmlFile.displayName = "HtmlFile"


export default HtmlFile;
