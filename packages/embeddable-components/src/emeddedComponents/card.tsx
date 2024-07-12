import React, { ReactNode } from "react";
import {
    BaseEmbeddableComponentProps,
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
import { MdxContentCLIENT } from "@ulld/render/mdx/client";
import { EmbeddableCardProps } from "./CLIENT_COMPONENTS/card/props";
import clsx from "clsx";



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
