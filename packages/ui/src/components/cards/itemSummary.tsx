import { CalendarAndDateManager } from '@ulld/api/classes/data/calendarAndDate'
import { PrismaMdxNoteSummaryOutput } from '@ulld/api/classes/prismaMdxRelations/protocols/mdxNote'
import { getDocumentTypeConfig } from '@ulld/configschema/configUtilityTypes/general'
import { searchByTagUrl } from '@ulld/state/searchParamSchemas/utilities/searchParamFormatters'
import clsx from 'clsx'
import { Route } from 'next'
import Link from 'next/link'
import React from 'react'
import { MdxContentSERVER } from '../mdxContent/mdxContentSERVER'



export interface ItemSummaryCardProps {
    item: PrismaMdxNoteSummaryOutput
    showType?: boolean
    bySequentialKey: boolean
}


const ItemTag = ({ tag }: { tag: string }) => {
    return (
        <Link href={searchByTagUrl(tag)} className="px-3 py-1 text-sm font-bold transition-colors duration-300 transform rounded cursor-pointer text-blue-500 hover:text-blue-400 dark:bg-blue-500 dark:hover:bg-blue-400 dark:text-white" tabIndex={0} role="button">{tag}</Link>
    )
}

const ItemSummaryCard = ({ item, showType }: ItemSummaryCardProps) => {
    const href = item.href as Route
    if (!href) {
        console.log(`No href found for item: ${item}`)
        return null
    }
    const itemUi = getDocumentTypeConfig(item.noteType)
    return (
        <div className="max-w-2xl px-8 py-4 bg-gray-100 rounded-lg dark:bg-gray-800 w-full shadow-md hover:shadow-sm transition-shadow duration-200">
            <div className="flex items-center justify-between">
                {item?.firstSync && <span className="text-sm font-light text-gray-600 dark:text-gray-400">{CalendarAndDateManager.formatDate(item.firstSync)}</span>}
                {showType && itemUi && <Link href={itemUi.url as Route} className={clsx(`px-2 py-2 rounded-lg`, `${item?.noteType}-ui`)} >{itemUi.label}</Link>}
            </div>
            <div className="mt-2">
                <Link href={href} className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" tabIndex={0} role="link">
                    <MdxContentSERVER inline content={item.title} />
                </Link>
                {item?.summary && <p className="mt-2 text-gray-600 dark:text-gray-300">
                    <MdxContentSERVER content={item.summary} />
                </p>}
            </div>
            <div className="">
                <Link href={href} className="text-blue-600 dark:text-blue-400 hover:underline" tabIndex={0} role="link">Read more</Link>
                <div className={"flex mt-2 flex-row justify-start items-center gap-2 max-w-full flex-wrap"}>{item?.tags?.map((t: { value: string }, i: number) => <ItemTag tag={t.value} key={`${item.id}-tag-${i}`} />)}</div>
            </div>
        </div>
    )
}


ItemSummaryCard.displayName = "ItemSummaryCard"


export default ItemSummaryCard;
