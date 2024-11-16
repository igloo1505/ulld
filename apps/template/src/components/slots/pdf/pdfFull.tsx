// Slot: pdf/FullPdf type:component propsExtends:FullPdfProps
import React from "react";
import { FullPdfProps } from "@ulld/pdf/types";
import REPLACEME from "#/components/REPLACEMEcomponent";
import { getFilePathProp } from "@ulld/utilities/filePathUtils";
import { notFound } from "next/navigation";
import appConfig from "appConfig"

export interface PageProps extends FullPdfProps {

}

const FullPdfTemplate = (props: PageProps) => {

    let filePath = props.searchParams.file

    if(!filePath){
        return notFound()
    }

    let fileProps = getFilePathProp(filePath, appConfig.fsRoot)

    return <REPLACEME
        {...props}
        file={fileProps}
    />
};

FullPdfTemplate.displayName = "REPLACEME";

export default FullPdfTemplate;
