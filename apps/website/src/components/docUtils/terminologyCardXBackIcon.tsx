"use client"
import { XIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface TerminologyCardXBackIconProps { }

const TerminologyCardXBackIcon = (props: TerminologyCardXBackIconProps) => {
    const router = useRouter();
    return (
        <XIcon
            className={"absolute top-4 right-4 h-4 w-4 text-foreground"}
            onClick={() => router.back()}
        />
    );
};

TerminologyCardXBackIcon.displayName = "TerminologyCardXBackIcon";

export default TerminologyCardXBackIcon;
