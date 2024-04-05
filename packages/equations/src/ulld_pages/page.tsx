import EquationFilterPanel from '#/components/pageSpecific/equations/equationListFilterPanel'
import EquationListItem from '#/components/pageSpecific/equations/equationListItem'
import { EquationSearchParams, EquationSearchParamsSchema } from '#/components/pageSpecific/equations/utils'
import { buttonVariants } from '#/components/shad/ui/button'
import PageContentContainer from '#/components/ui/contentContainer'
import { serverClient } from '#/trpc/serverClient'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'



interface EquationsPageProps {
    searchParams: EquationSearchParams
}


const EquationsPage = async ({ searchParams }: EquationsPageProps) => {
    const data = await serverClient.equations.getEquationsList(EquationSearchParamsSchema.parse(searchParams))


    return (
        <PageContentContainer>
            <Link
                href="/equations/add"
                className={clsx("absolute top-0 right-12", buttonVariants({}))}
            >Add</Link>
            <div className={"w-full h-full flex flex-col justify-center items-center"}>
                <div className={"w-full h-fit min-h-full flex flex-col justify-start items-center"}>
                    <EquationFilterPanel
                        searchParams={searchParams}
                        tags={data.tags.map((t) => ({ value: t }))}
                        variables={data.variables}
                    />
                    <ul className={"w-fit min-w-[83.333%] grid grid-cols-1 lg:grid-cols-2 gap-3 mt-6"}>
                        {data.equations.map((eq) => {
                            return <EquationListItem
                                key={`eq-${eq.id}`}
                                equation={eq}
                            />
                        })}
                    </ul>
                </div>
            </div>
        </PageContentContainer>
    )
}


EquationsPage.displayName = "EquationsPage"


export default EquationsPage;
