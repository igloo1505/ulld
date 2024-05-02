import EquationFilterPanel from '../../components/equationListFilterPanel'
import EquationListItem from '../../components/equationListItem'
import { EquationSearchParamsInput, equationSearchParamsSchema } from '../../components/utils'
import { buttonVariants } from '@ulld/tailwind/button'
import { PageContentContainer } from '@ulld/ui/pageContentContainer'
import { serverClient } from '@ulld/api/serverClient'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'


export interface PageProps {
    searchParams: EquationSearchParamsInput
}


const EquationsPage = async ({ searchParams }: PageProps) => {
    let _params = equationSearchParamsSchema.parse(searchParams)
    const data = await serverClient.equations.getEquationsList(_params)


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
