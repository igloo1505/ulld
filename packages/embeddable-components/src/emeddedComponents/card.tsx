import React from "react";
import {
    getBaseEmbeddableProps,
} from "./baseEmbeddableComponentTypes";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@ulld/tailwind/card";
import { stringToConsistentId } from "@ulld/state/formatting/general";
import { EmbeddableCardProps } from "./CLIENT_COMPONENTS/card/props";
import { MdxContentSERVER } from "@ulld/render/mdx/server";



export const EmbeddableCard = async ({
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

    const newProps = getBaseEmbeddableProps<HTMLDivElement>(_props)

    return (
        <Card {...newProps} className={newProps.className} id={id}>
            {(title || desc || description) && (
                <CardHeader className={"not-prose"}>
                    {title && (
                        <CardTitle className={"not-prose"}>
                            {typeof title === "string" ? (
                                <MdxContentSERVER content={title as string} inline />
                            ) : (
                                title
                            )}
                        </CardTitle>
                    )}
                    {(desc || description) && (
                        <CardDescription className={"not-prose"}>
                            <MdxContentSERVER
                                content={desc || (description as string)}
                                display
                            />
                        </CardDescription>
                    )}
                </CardHeader>
            )}
            <CardContent className={"not-prose"}>
                {typeof c === "string" ? (
                    <MdxContentSERVER content={c || ""} display />
                ) : (
                    (c as React.ReactNode)
                )}
            </CardContent>
        </Card>
    );
};

EmbeddableCard.displayName = "EmbeddableCard";
