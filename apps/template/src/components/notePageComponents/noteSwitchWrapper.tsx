import React from 'react'
import { IndividualNoteSwitch } from "@ulld/ui/individualNoteSwitch";
import { unifiedMdxParser } from '#/methods/parsers/mdxParser';
import { SpecificNoteQueryManager } from '@ulld/api/classes/specificNoteQuery/specificNoteQueryManager';
import { WithFSSearchParams } from '@ulld/types';
import { notFound } from 'next/navigation';
import appConfig from "appConfig"
import buildData from "buildData"
import { serverClient } from '#/trpc/mainServer';
import { MdxNoteParseParams } from '@ulld/api/classes/prismaMdxRelations/mdxNote';
import { BuildStaticDataOutput } from '@ulld/configschema/buildTypes';
import { AppConfigSchemaOutput } from '@ulld/configschema/types';
import { generatedComponentMap } from "#/internal/componentMap";
import NoteDetailsSheetTemplate from '../slots/navigation/noteDetailSheet';


interface NoteSwitchInternalWrapperProps extends WithFSSearchParams {
   categoryId: string
   params: {
       slug: string
    }
}

const NoteSwitchInternalWrapper = async ({ params, searchParams, categoryId }: NoteSwitchInternalWrapperProps) => {

    const docTypeData = (appConfig as AppConfigSchemaOutput).noteTypes.find((n) => n.id === categoryId)

    if (!docTypeData) {
        return notFound();
    }

    const props = await SpecificNoteQueryManager.formatNoteProps(
        docTypeData,
        params,
        searchParams,
        appConfig as AppConfigSchemaOutput,
        buildData as unknown as BuildStaticDataOutput
    );

    if(props.noteProps?.format && [".md", ".mdx"].includes(props.noteProps.format)){
           serverClient.mdx.setMdxAccessed({rootRelativePath: props.noteProps.rootRelativePathWithExtension || `${props.noteProps.rootRelativePath}.mdx`})
    }

    let mdxParserParams: MdxNoteParseParams = {
        appConfig: appConfig as AppConfigSchemaOutput,
        docTypeData,
        parser: unifiedMdxParser
    }

    return <IndividualNoteSwitch
        {...props}
        embeddableComponents={generatedComponentMap}
        parsers={{
            mdx: mdxParserParams
        }}
        NoteDetailSheet={(detailProps) => <NoteDetailsSheetTemplate 
            noteProps={props.noteProps}
            docTypeData={props.docType}
            {...detailProps}
        />}
    />;
}


NoteSwitchInternalWrapper.displayName = "NoteSwitchInternalWrapper"


export default NoteSwitchInternalWrapper;
