import React from "react";
import { CopyIcon } from "lucide-react";
import { copyStringToClipboard } from "@ulld/utilities/copyStringToClipboard";
import { useToast } from "@ulld/tailwind/use-toast";
import { ShikiLanguage } from "@ulld/utilities/shikiLanguages";


interface CopyCodeButtonProps {
  language: ShikiLanguage
  content: string;
}


export const CopyCodeButton = ({ language, content }: CopyCodeButtonProps) => {
  const { toast } = useToast();
  const copyCode = async () => {
    await copyStringToClipboard(content);
    toast({
      title: "Success",
      description: `The ${language} code has been copied to your clipboard.`,
    });
  };
  return (
    <a
      role="button"
      onClick={copyCode}
      className={
        "absolute top-2 right-2 p-2 hidden bg-primary text-primary-foreground rounded group-hover/codeHighlight:flex flex-col justify-center items-center"
      }
    >
      <CopyIcon className={"w-3 h-3"} />
    </a>
  );
};

CopyCodeButton.displayName = "CopyCodeButton";
