"use client";
import { DocumentTypes } from "contentlayer/generated";
import React from "react";
import SourceCode from "./sourceCode";
import CodeOutput from "./output";
import MDXArticle from "../mdxArticle";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@ulld/tailwind/resizable";

interface SideBySideWithSourceProps {
  mdx: DocumentTypes;
}

const SideBySideWithSource = ({ mdx }: SideBySideWithSourceProps) => {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={50}>
        <SourceCode content={mdx.body.raw} />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <CodeOutput>
          <MDXArticle mdx={mdx} />
        </CodeOutput>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

SideBySideWithSource.displayName = "SideBySideWithSource";

export default SideBySideWithSource;
