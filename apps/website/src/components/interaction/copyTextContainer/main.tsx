"use client";
import React, { HTMLProps, ReactNode } from "react";
import { cn } from "@ulld/utilities/cn";
import { copyStringToClipboard } from "@ulld/utilities/actions/copyStringToClipboard";
import { useToast } from "@ulld/tailwind/use-toast";

interface CopyTextContainerProps extends HTMLProps<HTMLDivElement> {
  children: string;
  className?: string;
  toastDescription?: ReactNode;
}

const CopyTextContainer = ({
  children,
  className,
  toastDescription,
  ...props
}: CopyTextContainerProps) => {
  const { toast } = useToast();
  const copyContent = async () => {
    let res = await copyStringToClipboard(children);
    if (res && toastDescription) {
      toast({
        title: "Copied!",
        description: toastDescription,
      });
    }
  };
  return (
    <div
      {...props}
      className={cn("py-2 px-3 border rounded-md cursor-pointer text-muted-foreground hover:border-foreground/70 transition-colors duration-300", className)}
      onClick={copyContent}
    >
      {children}
    </div>
  );
};

CopyTextContainer.displayName = "CopyTextContainer";

export default CopyTextContainer;
