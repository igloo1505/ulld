"use client";
import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@ulld/tailwind/card";
import { stringToConsistentId } from "@ulld/state/formatting/general";
import {
    getBaseEmbeddableProps,
} from "../../baseEmbeddableComponentTypes";
import cn from "@ulld/utilities/cn";
import { EmbeddableCardProps } from "./props";
import { MdxContentCLIENT } from "@ulld/render/mdx";


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

    let newProps = getBaseEmbeddableProps<HTMLDivElement>(_props);
    return (
        <Card {...newProps} className={cn(newProps.className, "mb-6")} id={id}>
            {(title || desc || description) && (
                <CardHeader className={"not-prose"}>
                    {title && (
                        <CardTitle className={"not-prose"}>
                            {typeof title === "string" ? (
                                <MdxContentCLIENT content={title as string} inline />
                            ) : (
                                title
                            )}
                        </CardTitle>
                    )}
                    {(desc || description) && (
                        <CardDescription className={"not-prose"}>
                            <MdxContentCLIENT
                                content={desc || (description as string)}
                                display
                            />
                        </CardDescription>
                    )}
                </CardHeader>
            )}
            <CardContent className={"not-prose"}>
                {typeof c === "string" ? (
                    <MdxContentCLIENT content={c || ""} display />
                ) : (
                    (c as React.ReactNode)
                )}
            </CardContent>
        </Card>
    );
};

EmbeddableCard.displayName = "EmbeddableCard";
