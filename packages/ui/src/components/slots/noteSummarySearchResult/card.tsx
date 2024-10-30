import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@ulld/tailwind/card";
import React, { type ReactNode } from "react";
import { Badge } from "@ulld/tailwind/badge";
import Link from "next/link";
import { DateTime } from "@ulld/utilities/dateTime";
import type { Route } from "next";
import { getRandomId } from "@ulld/utilities/identity";
import { searchByTagUrl } from "@ulld/state/searchParamSchemas/utilities/searchParamFormatters";
import { MdxContentRSC } from "@ulld/render/mdx/rsc";
import { cn } from "@ulld/utilities/cn";
import type { NoteSummaryProps } from "../../../types/general";


const DefaultNoteSummaryCard = ({
    item,
    searchType,
}: NoteSummaryProps & { cardId: string }): ReactNode => {
    const href = item.href;
    const cardId = getRandomId(12);
    const ids = {
        title: `${item.id}-title`,
        summary: `${item.id}-summary`,
    };
    const hasFooterContent = Boolean(item.tags.length);

    return (
        <Card className="w-full lg:h-full" id={cardId}>
            <CardHeader
                className={(item.summary || hasFooterContent) ? "pb-4" : undefined}
            >
                <CardTitle
                    className="relative flex flex-row flex-wrap gap-2 mdx"
                    id={ids.title}
                >
                    <Link className="w-full max-w-full" href={href as Route}>
                        <MdxContentRSC content={item.title} inline />
                        {searchType === "bySequentialId" && (
                            <span className="text-sm text-muted-foreground absolute -top-4 -right-3">
                                {item.sequentialIndex}
                            </span>
                        )}
                    </Link>
                </CardTitle>
                {item.firstSync ? (
                    <CardDescription className="text-sm">
                        {DateTime.formatDate(item.firstSync)}
                    </CardDescription>
                ) : null}
            </CardHeader>
            {item.summary ? (
                <CardContent
                    className={cn(
                        "text-muted-foreground text-sm",
                        hasFooterContent && "pb-4",
                    )}
                    id={ids.summary}
                >
                    <MdxContentRSC content={item.summary} inline />
                </CardContent>
            ) : null}
            {Boolean(item.tags.length) && (
                <CardFooter className="flex flex-col justify-center items-start gap-2">
                    <div className="flex flex-row gap-2 overflow-x-scroll overflow-y-hidden w-full no-scrollbar">
                        {item.tags.map((t) => {
                            return (
                                <Link
                                    href={searchByTagUrl(t.value)}
                                    key={`${item.id}-tag-${t.value}`}
                                >
                                    <Badge className="cursor-pointer">{t.value}</Badge>
                                </Link>
                            );
                        })}
                    </div>
                </CardFooter>
            )}
        </Card>
    );
};

DefaultNoteSummaryCard.displayName = "DefaultNoteSummaryCard";

export default DefaultNoteSummaryCard;
