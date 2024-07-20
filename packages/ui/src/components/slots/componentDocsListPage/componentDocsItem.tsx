import { Card, CardFooter, CardHeader, CardTitle } from "@ulld/tailwind/card";
import { BuildStaticDataOutput } from "@ulld/types";
import React from "react";
import Link from "next/link";
import { Badge } from "@ulld/tailwind/badge";
import { componentDocQueryObjectToUrl } from "@ulld/utilities/componentDocsPathUtils";

interface ComponentDocsSummaryItemProps {
    item: BuildStaticDataOutput["componentDocs"][number];
}

const ComponentDocsSummaryItem = ({ item }: ComponentDocsSummaryItemProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{item.componentName}</CardTitle>
            </CardHeader>
            <div
                className={
                    "w-full h-full flex flex-row justify-start items-center gap-4 flex-wrap"
                }
            >
                {item.tags.map((t) => (
                    <Link
                        href={componentDocQueryObjectToUrl({
                            tag: [t],
                        })}
                    >
                        <Badge>t</Badge>
                    </Link>
                ))}
            </div>
            <CardFooter>
                <Link href={item.slugs.full || item.slugs.short!}>View</Link>
            </CardFooter>
        </Card>
    );
};

ComponentDocsSummaryItem.displayName = "ComponentDocsSummaryItem";

export default ComponentDocsSummaryItem;
