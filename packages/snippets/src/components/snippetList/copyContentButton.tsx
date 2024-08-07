"use client";
import React, { ReactNode } from "react";
import { Button } from "@ulld/tailwind/button";
import { copyStringToClipboard } from "@ulld/utilities/actions/copyStringToClipboard";

interface CopyContentButtonProps {
    content: string;
    children: ReactNode;
}

const CopyContentButton = ({ content, children }: CopyContentButtonProps) => {
    return (
        <Button onClick={async () => copyStringToClipboard(content)}>
            {children}
        </Button>
    );
};

CopyContentButton.displayName = "CopyContentButton";

export default CopyContentButton;
