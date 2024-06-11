import { Term } from "#/staticData/docs";
import { Card, CardContent, CardHeader, CardTitle } from "@ulld/tailwind/card";
import { XIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface TerminologyCardProps extends Term {
    isModal?: boolean;
}

const TerminologyCard = (props: TerminologyCardProps) => {
    const router = useRouter();
    return (
        <Card>
            <CardHeader className={"relative"}>
                <CardTitle>{props.label}</CardTitle>
                {props.isModal && (
                    <XIcon
                        className={"absolute top-4 right-4 h-4 w-4 text-foreground"}
                        onClick={() => router.back()}
                    />
                )}
            </CardHeader>
            <CardContent>{props.content}</CardContent>
        </Card>
    );
};

TerminologyCard.displayName = "TerminologyCard";

export default TerminologyCard;
