import React from 'react'
import { MdxContentSERVER, MdxContentSERVERProps } from './mdxContentSERVER'
import {MdxFile} from "@ulld/utilities/mdxFile"
import path from 'path'
import { notFound } from 'next/navigation'
import { ConditionalComponentQuery } from '@ulld/component-map/types'



interface MdxContentFileSystemSERVERProps<J extends unknown> extends Omit<MdxContentSERVERProps, "content"> {
    rootRelativePath: string
    fsRoot: string
    componentMap: ConditionalComponentQuery<J>[]
}

const MdxContentFileSystemSERVER = async <J extends unknown>({ rootRelativePath, fsRoot, ...props }: MdxContentFileSystemSERVERProps<J>) => {

    let file = new MdxFile(path.join(fsRoot, rootRelativePath))
    if(!file.exists()){
        return notFound()
    }
    let content = file.getContent()

    return (
        <MdxContentSERVER
            {...props}
            content={content}
        />
    )
}


MdxContentFileSystemSERVER.displayName = "MdxContentFileSystemSERVER"


export default MdxContentFileSystemSERVER;
