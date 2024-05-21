import React, { ReactNode } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@ulld/tailwind/card";
import { stringToConsistentId } from "@ulld/state/formatting/general";
import {
    BaseEmbeddableComponentProps,
    getBaseEmbeddableProps,
} from "../../baseEmbeddableComponentTypes";
import { useMathjaxDynamicParse } from "@ulld/hooks/useMathjaxDynamicParse";

type C = string | undefined | null;

interface EmbeddableCardProps extends BaseEmbeddableComponentProps {
    title?: ReactNode;
    body?: C;
    children?: C | React.ReactNode;
    description?: C;
    desc?: C;
}

export const EmbeddableCard = ({
    title,
    body,
    children,
    description,
    desc,
    ..._props
}: EmbeddableCardProps) => {
    let c = body || children;
    const id = _props.id
        ? _props.id
        : typeof title === "string"
            ? stringToConsistentId(title)
            : `card-${new Date().valueOf() * Math.random()}`;

    useMathjaxDynamicParse([title, desc, c]);
    return (
        <Card {...getBaseEmbeddableProps(_props)} id={id}>
            {(title || desc || description) && (
                <CardHeader>
                    {title && <CardTitle>{title}</CardTitle>}
                    {(desc || description) && (
                        <CardDescription>
                            {desc || description}
                        </CardDescription>
                    )}
                </CardHeader>
            )}
            <CardContent>
                {c}
            </CardContent>
        </Card>
    );
};

EmbeddableCard.displayName = "EmbeddableCard";
