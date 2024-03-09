"use client"
import Link from 'next/link'
import { Route } from "next"
import { Button } from "@ulld/tailwind/base"
import { DocTypes } from '@ulld/configschema'
import { formatSearchAllParams } from '@ulld/state'


export const SubjectTag = ({ subject, category, basePath }: { subject: string, basePath: Route, category: DocTypes }) => {
    const params = formatSearchAllParams({
        categories: [category],
        subjects: [subject]
    })
    return (
        <Button
            asChild
            size="sm"
            className={"whitespace-nowrap"}
        >
            <Link
                href={`${basePath}?${params}`}
            >
                {subject}
            </Link>
        </Button>
    )
}

export const TopicTag = ({ topic, category, basePath }: { topic: string, basePath: Route, category: DocTypes }) => {
    const params = formatSearchAllParams({
        categories: [category],
        topics: [topic]
    })
    return (
        <Button
            asChild
            className={"whitespace-nowrap"}
            size="sm"
        >
            <Link href={`${basePath}?${params}`}>
                {topic}
            </Link>
        </Button>
    )
}
