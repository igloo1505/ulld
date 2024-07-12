"use client";
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
    getBaseEmbeddableProps,
} from "../../baseEmbeddableComponentTypes";
import { useMathjaxDynamicParse } from "@ulld/hooks/useMathjaxDynamicParse";
import cn from "@ulld/utilities/cn";
import { MathJax } from "better-react-mathjax";
import { EmbeddableCardProps } from "./props";


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
    let newProps = getBaseEmbeddableProps<HTMLDivElement>(_props);
    return (
        <Card {...newProps} className={cn(newProps.className, "mb-6")} id={id}>
            <MathJax inline>
                {(title || desc || description) && (
                    <CardHeader className={"not-prose"}>
                        {title && <CardTitle>{title}</CardTitle>}
                        {(desc || description) && (
                            <CardDescription>{desc || description}</CardDescription>
                        )}
                    </CardHeader>
                )}
            </MathJax>
            <MathJax inline={false}>
                <CardContent className={"not-prose"}>{c}</CardContent>
            </MathJax>
        </Card>
    );
};

EmbeddableCard.displayName = "EmbeddableCard";
