import React from 'react'
import ContentListPageObserver from '../functionality/ContentListPageObserver'
import NoneFound from '../pageSpecific/search/noneFound'
import ThemedSummaryCard from '../ui/cards/themedSummaryCard'
import { PrismaMdxNoteSummaryOutput } from '#/classes/prismaMdxRelations/protocols/mdxNote'


const CategoryList = ({ items, bySequentialKey }: { items: PrismaMdxNoteSummaryOutput[], bySequentialKey?: boolean }) => {
    if (items.length === 0) return <NoneFound />
    console.log("items: ", items)
    return (
        <div className={"w-full h-full flex flex-col justify-start items-center gap-4"}>
            <ContentListPageObserver />
            <div className={"grid w-full gap-4 mb-6"}
                style={{
                    gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))"
                }}
            >
                {items.map((item: PrismaMdxNoteSummaryOutput, i: number) => {
                    return <ThemedSummaryCard bySequentialKey={Boolean(bySequentialKey)} item={item} showType key={`item-summary-${i}`} />
                })
                }
            </div>
        </div>
    )
}


CategoryList.displayName = "CategoryList"


export default CategoryList;
