import { CalendarAndDateManager } from '@ulld/api'
import { NoteTypeOverviewList } from '@ulld/state'
import { Card, CardHeader, CardTitle, CardDescription } from '@ulld/tailwind/base'
import { Route } from 'next'
import Link from 'next/link'
import React from 'react'


interface LocationCardProps {
    item: NoteTypeOverviewList[number]
}


const LocationCard = ({ item }: LocationCardProps) => {
    return (
        <Card>
            <CardHeader>
                <Link href={item.url as Route || "/"}>
                    <CardTitle className={"relative"}>
                        <span>
                            {item.label}
                        </span>
                        {item.totalNotes !== undefined && <CardDescription className={"absolute top-1 right-1"}>
                            {item.totalNotes || 0}
                        </CardDescription>}
                    </CardTitle>
                </Link>
                {item.lastUpdated && <CardDescription>{CalendarAndDateManager.formatDate(item.lastUpdated)}</CardDescription>}
            </CardHeader>
        </Card>
    )
}


LocationCard.displayName = "LocationCard"


export default LocationCard;
