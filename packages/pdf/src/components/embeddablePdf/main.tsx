import React from "react";
import MdxPdfViewerInternal, { MdxPdfViewerProps } from "./internal";
import { readAppConfig } from "@ulld/developer/readAppConfig";

const MdxPdfViewer = async (props: Omit<MdxPdfViewerProps, "appConfig">) => {
    const appConfig = await readAppConfig();
    return <MdxPdfViewerInternal appConfig={appConfig} {...props} />;
};

MdxPdfViewer.displayName = "MdxPdfViewer";

export default MdxPdfViewer;
