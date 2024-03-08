import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge } from '@ulld/tailwind/base';
import React from 'react'
import { ItemSummaryCardProps } from './itemSummary';
import Link from 'next/link';
import { Route } from 'next';
import ThemedSummaryCardContextMenu from './themedSummaryCardContextMenu';
import { CalendarAndDateManager } from '@ulld/api';
import { searchByCitationUrl, searchByTagUrl } from '@ulld/state';
import { getRandomId } from '@ulld/utilities';
import { MdxContentSERVER } from '..';




const ThemedSummaryCard = ({ item, showType, bySequentialKey }: ItemSummaryCardProps) => {
    const href = item.href
    const cardId = getRandomId(12)
    const ids = {
        title: `${item.id}-title`,
        summary: `${item.id}-summary`
    }
    return (
        <Card
            id={cardId}
        >
            <ThemedSummaryCardContextMenu
                cardId={cardId}
                item={item}
            />
            <CardHeader>
                <Link
                    href={href as Route}
                >
                    <CardTitle
                        className={"relative flex flex-row flex-wrap gap-2 mdx"}
                        id={ids.title}
                    >
                        <MdxContentSERVER
                            content={item.title.original}
                        /* parentId={ids.title} */
                        />
                        {bySequentialKey && <span
                            className={"text-sm text-muted-foreground absolute -top-4 -right-3"}
                        >{item.sequentialIndex}</span>}
                    </CardTitle>
                </Link>
                {item?.firstSync && <CardDescription>{CalendarAndDateManager.formatDate(item.firstSync)}</CardDescription>}
            </CardHeader>
            {item?.summary && <CardContent
                id={ids.summary}
                className={"text-sm font-thin"}
            >
                <MdxContentSERVER
                    content={item.summary}
                    parentId={ids.summary}
                />
            </CardContent>}
            <CardFooter className={"flex flex-col justify-center items-start gap-2"}>
                <div className={"flex flex-row gap-2 overflow-x-scroll overflow-y-hidden w-full no-scrollbar"}>
                    {item?.tags?.map((t: { value: string }, i: number) => {
                        return (
                            <Link href={searchByTagUrl(t.value)} key={`${item.id}-tag-${i}`}>
                                <Badge className={"cursor-pointer"} >{t.value}</Badge>
                            </Link>
                        )
                    })}
                </div>
                <div className={"flex flex-row gap-2 overflow-x-scroll overflow-y-hidden w-full no-scrollbar"}>
                    {item?.citations?.map((t: NonNullable<(typeof item)["citations"]>[number], i: number) => {
                        return (
                            <Link href={searchByCitationUrl(t.id)} key={`${item.id}-cit-${i}`}>
                                <Badge className={"bg-green-500 dark:bg-green-400 cursor-pointer dark:text-black hover:bg-green-600 dark:hover:bg-green-500 "} >{t.id}</Badge>
                            </Link>
                        )
                    })}
                </div>
            </CardFooter>
        </Card>
    )
}


ThemedSummaryCard.displayName = "ThemedSummaryCard"


export default ThemedSummaryCard;
