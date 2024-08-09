"use client";
import React, { ReactNode } from "react";
import { Button } from "@ulld/tailwind/button";
import { copyStringToClipboard } from "@ulld/utilities/actions/copyStringToClipboard";
import { useToast } from "@ulld/tailwind/use-toast";

interface CopyContentButtonProps {
    content: string;
    language?: string
    children: ReactNode;
}

const CopyContentButton = ({ content, language, children }: CopyContentButtonProps) => {
    const { toast } = useToast();
    return (
        <Button
            onClick={async () => {
                copyStringToClipboard(content);
                toast({
                    title: "Success",
                    description: `The ${language} code has been copied to your clipboard.`,
                });
            }}
        >
            {children}
        </Button>
    );
};

CopyContentButton.displayName = "CopyContentButton";

export default CopyContentButton;
