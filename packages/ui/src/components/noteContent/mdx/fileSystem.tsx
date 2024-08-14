import { AdditionalComponents } from '@ulld/component-map/types'
import { MdxContentSERVER } from '@ulld/render/mdx/server'
import React from 'react'
import IndividualNoteContainer from './individualNoteContainer'
import { serverClient } from '@ulld/api/serverClient'
import grayMatter from "gray-matter"
import { NotePageProps } from '../../../utilityFunctions/formatting/formatNoteProps'
import { FrontMatterType } from '@ulld/types'



interface FileSystemMdxProps extends NotePageProps {
    embeddableComponents: AdditionalComponents
    rootRelativePath: string
    extension?: ".mdx" | ".md"
}

const FileSystemMdxPage = async (props: FileSystemMdxProps) => {
    let fileContent = await serverClient.mdx.getFsMdx({
        rootRelativePath: props.rootRelativeWithExtension,
        extension: props.extension || ".mdx"
    })
    let frontMatter = grayMatter(fileContent.content)
    let parsedData = await props.parsers.mdx.parser({
        content: fileContent.content,
        data: frontMatter as Partial<FrontMatterType>,
        serverClient: serverClient,
        appConfig: props.parsers.mdx.appConfig,
        db: fileContent.details,
        docTypeData: props.parsers.mdx.docTypeData || {}
    })

return (
    <IndividualNoteContainer 
            parsedData={parsedData.data || frontMatter}
            type="fs"
            details={fileContent.details}
        >
            <MdxContentSERVER 
                content={frontMatter.content}
                components={props.embeddableComponents}
                appConfig={props.parsers.mdx.appConfig}
            />
    </IndividualNoteContainer>
)
}


FileSystemMdxPage.displayName = "FileSystemMdx"


export default FileSystemMdxPage;
