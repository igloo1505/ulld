import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@ulld/tailwind/card";
import React from "react";
import { Badge } from "@ulld/tailwind/badge";
import Link from "next/link";
import { DateTime } from "@ulld/utilities/dateTime";
import { Route } from "next";
import clsx from "clsx";
import { NoteSummaryProps } from "../../../types/general";
import { getRandomId } from "@ulld/utilities/identity";
import { searchByTagUrl } from "@ulld/state/searchParamSchemas/utilities/searchParamFormatters";
import { MdxContentSERVER } from "@ulld/render/mdx/server";


const DefaultNoteSummaryCard = ({
    item,
    searchType
}: NoteSummaryProps & {cardId: string} ) => {
    if(!item) return null
    const href = item.href;
    const cardId = getRandomId(12);
    const ids = {
        title: `${item.id}-title`,
        summary: `${item.id}-summary`,
    };
    const hasFooterContent = Boolean(
        item?.tags?.length,
    );

    return (
        <Card
            id={cardId}
            className={"w-full lg:h-full"}
        >
            <CardHeader
                className={clsx(Boolean(item?.summary || hasFooterContent) && "pb-4")}
            >
                <CardTitle
                    className={"relative flex flex-row flex-wrap gap-2 mdx"}
                    id={ids.title}
                >
                    <Link href={href as Route}>
                        <MdxContentSERVER inline content={item.title} />
                        {(searchType === "bySequentialId") && (
                            <span
                                className={
                                    "text-sm text-muted-foreground absolute -top-4 -right-3"
                                }
                            >
                                {item.sequentialIndex}
                            </span>
                        )}
                    </Link>
                </CardTitle>
                {item?.firstSync && (
                    <CardDescription>
                        {DateTime.formatDate(item.firstSync)}
                    </CardDescription>
                )}
            </CardHeader>
            {item?.summary && (
                <CardContent
                    id={ids.summary}
                    className={clsx(
                        "text-muted-foreground text-sm",
                        hasFooterContent && "pb-4",
                    )}
                >
                    <MdxContentSERVER inline content={item.summary} />
                </CardContent>
            )}
            {Boolean(item.tags.length) && (
                <CardFooter
                    className={"flex flex-col justify-center items-start gap-2"}
                >
                    <div
                        className={
                            "flex flex-row gap-2 overflow-x-scroll overflow-y-hidden w-full no-scrollbar"
                        }
                    >
                        {item.tags.map((t, i: number) => {
                            return (
                                <Link
                                    href={searchByTagUrl(t.value)}
                                    key={`${item.id}-tag-${i}`}
                                >
                                    <Badge className={"cursor-pointer"}>{t.value}</Badge>
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
