import { Term } from "#/staticData/docs";
import { Card, CardContent, CardHeader, CardTitle } from "@ulld/tailwind/card";
import React from "react";
import TerminologyCardXBackIcon from "./terminologyCardXBackIcon";

interface TerminologyCardProps extends Term {
    isModal?: boolean;
}

const TerminologyCard = (props: TerminologyCardProps) => {
    return (
        <Card>
            <CardHeader className={"relative"}>
                <CardTitle>{props.label}</CardTitle>
                {props.isModal && (
                  <TerminologyCardXBackIcon />
                )}
            </CardHeader>
            <CardContent>{props.content}</CardContent>
        </Card>
    );
};

TerminologyCard.displayName = "TerminologyCard";

export default TerminologyCard;
