import type { Subject, Topic } from '@prisma/client'
import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { XIcon } from 'lucide-react'
import { Route } from 'next'
import { DocumentTypeConfig } from '@ulld/configschema'
import { WithFSSearchParams, formatSearchAllParams } from '@ulld/state'
import { buttonVariants, Button } from '@ulld/tailwind'
import { SubjectTag, TopicTag } from '../..'



interface CategoryListSecondaryFilterProps {
    data: {
        topics: Topic[]
        subjects: Subject[]
        docType?: DocumentTypeConfig
    }
    category?: DocumentTypeConfig
    sp: WithFSSearchParams["searchParams"]
}


const CategoryListSecondaryFilter = async ({ data, sp, category }: CategoryListSecondaryFilterProps) => {
    if (!category) return null
    return (
        <div className={clsx("w-full h-fit", Boolean(data.topics.length > 0 || data.subjects.length > 0) && "mb-3")}>
            {data.subjects.length > 0 && (
                <div className={"w-full flex flex-col justify-center items-center md:items-start"}>
                    <h3 className={"w-full text-lg font-semibold mb-2"}>{data.docType?.subjectLabel || "Subjects"}</h3>
                    <div className={"w-full h-fit flex flex-row justify-start items-center flex-wrap gap-4 px-6 md:px-8"}>
                        {sp?.subjects && <Link
                            className={buttonVariants({ size: "icon", variant: "destructive" })}
                            href={`${category.url}?${formatSearchAllParams({
                                ...sp,
                                categories: [category.docType],
                                subjects: undefined
                            })
                                }` as Route}>
                            <XIcon className="h-4 w-4" />
                        </Link>
                        }
                        {
                            data.subjects.map((s, i) => {
                                return <SubjectTag
                                    basePath={category.url as Route}
                                    key={`subject-${i}`} subject={s.value} category={category.docType} />
                            })
                        }</div>
                </div>
            )}
            {data.topics.length > 0 && (
                <div className={"w-full flex flex-col justify-center items-center md:items-start"}>
                    <h3 className={"w-full text-lg font-semibold mb-2"}>{data.docType?.topicLabel || "Topics"}</h3>
                    <div className={"w-full h-fit flex flex-row justify-start items-center flex-wrap gap-4 px-6 md:px-8"}>
                        {sp?.topics && <Button size="icon" variant="destructive">
                            <Link href={`${category.url}?${formatSearchAllParams({
                                ...sp,
                                categories: [category.docType],
                                topics: undefined
                            })
                                }` as Route}>
                                <XIcon className="h-4 w-4" />
                            </Link>
                        </Button>
                        }
                        {
                            data.topics.map((s, i) => {
                                return <TopicTag
                                    basePath={category.url as Route}
                                    key={`topic-${i}`} topic={s.value} category={category.docType} />
                            })
                        }</div>
                </div>
            )}
        </div>
    )
}


CategoryListSecondaryFilter.displayName = "CategoryListSecondaryFilter"


export default CategoryListSecondaryFilter;
