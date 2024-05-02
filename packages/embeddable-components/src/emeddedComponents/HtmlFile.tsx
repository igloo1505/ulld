import { serverClient } from "@ulld/api/serverClient";
import React from "react";

interface HtmlFileProps {
  file: string;
}

export const HtmlFile = async ({ file }: HtmlFileProps) => {
  const fileContent = await serverClient.fsUtils.getUtf8File({
    rootRelativePath: file,
  });
  return <div dangerouslySetInnerHTML={{ __html: fileContent }} />;
};

HtmlFile.displayName = "HtmlFile";
