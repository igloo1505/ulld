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
import MathjaxProvider from "#/components/utility/providers/mathjax";

interface SideBySideWithSourceProps {
  mdx: DocumentTypes;
}


const SideBySideWithSource = ({ mdx }: SideBySideWithSourceProps) => {
  return (
    <ResizablePanelGroup className={"w-full h-full max-h-[calc(100vh-76px)]"} direction="horizontal">
      <ResizablePanel defaultSize={50}>
        <SourceCode content={mdx.body.raw} />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <CodeOutput>
          <MathjaxProvider>
            <MDXArticle isSource mdx={mdx} />
          </MathjaxProvider>
        </CodeOutput>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

SideBySideWithSource.displayName = "SideBySideWithSource";

export default SideBySideWithSource;
