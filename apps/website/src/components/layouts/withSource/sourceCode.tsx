import React, { useEffect, useState } from "react";
import {codeToHtml} from "shiki";

interface SourceCodeProps {
  content: string;
}

const SourceCode = ({ content }: SourceCodeProps) => {
  console.log("content: ", content)
  const [source, setSource] = useState<string | null | undefined>(null);
  const gatherSource = async () => {
    const sourceCode = await codeToHtml(content, {
      theme: "aurora-x",
      lang: "mdx",
    });
    console.log("sourceCode: ", sourceCode);
    setSource(sourceCode);
  };
  useEffect(() => {
    gatherSource();
  }, [content]);

  return (
    <div
      className={
        "w-full max-w-full h-full max-h-full overflow-y-auto block not-prose [&_pre]:max-w-full p-4 text-sm"
      }
      dangerouslySetInnerHTML={source ? { __html: source } : undefined}
    />
  );
};

SourceCode.displayName = "SourceCode";

export default SourceCode;
