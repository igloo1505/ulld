"use client"
import { Route } from 'next'
import React from 'react'
import ReactPaginate from 'react-paginate'
import "./paginationStyles.scss"
import { useRouter, useSearchParams } from 'next/navigation'
import {formatSearchAllParams } from '@ulld/state/searchParamSchemas/utilities/formatSearchAllParams'
import { SearchAllParams } from '@ulld/types'


type NumStr = number | string


export interface PaginationButtonGroupProps {
    page?: NumStr
    totalItems: number
    perPage: number
    basePath?: Route
    searchParams?: SearchAllParams
    hrefBuilder?: (pageIndex: number, pageCount: number, selectedPage: number) => Route;
    noClick?: boolean
}


/* RESUME: Continue with this pagination and implemenent everywhere it's needed. Should have a significant impact on usability and UX. */

/* NOTE: Still need to implement this pretty much entirely. Will try to move over to Next 14+ to hopefully improve this monstorously slow compiler, but for right now the dev server to address improvements like this is almost useless. */
/* https://github.com/AdeleD/react-paginate#readme */
/* https://www.npmjs.com/package/react-paginate */
const PaginationButtonGroup = ({ totalItems, perPage, basePath, searchParams, hrefBuilder, noClick }: PaginationButtonGroupProps) => {

    const router = useRouter()
    const sp = useSearchParams()
    const _page = sp.get("page")
    const page = parseInt(_page ? _page : "1") - 1
    const pageCount = Math.ceil(totalItems / perPage)

    if (totalItems <= perPage) return null

    const handlePageClick = (__props: { selected: number }) => {
        const { selected } = __props
        let _href: Route = hrefBuilder ? hrefBuilder(selected, pageCount, selected) : `${basePath}?${formatSearchAllParams({
            ...searchParams,
            page: typeof selected === "number" ? `${selected + 1}` : "1"
        })}` as Route
        if (noClick) return
        router.push(_href)
    }



    return (
        <ReactPaginate
            className={"pagination-container mt-4"}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            forcePage={page}
            disableInitialCallback
            breakLabel="..."
            hrefBuilder={hrefBuilder}
            nextLabel="next >"
            previousLabel="< previous"
            nextLinkClassName="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground dark:hover:text-gray-200"
            previousLinkClassName="noLinkColor px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground dark:hover:text-gray-200"
            nextClassName=""
            previousClassName=""
            pageLinkClassName="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground dark:hover:text-gray-200"
            pageClassName=""
            activeClassName=""
            activeLinkClassName="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md bg-transparent dark:text-gray-200 border border-muted-foreground hover:border-transparent"
            disabledClassName=""
            disabledLinkClassName="text-muted-foreground bg-muted border-none hover:border-none hover:bg-muted cursor-default"
            renderOnZeroPageCount={null}
        />
    )
}


PaginationButtonGroup.displayName = "PaginationButtonGroup"


export default PaginationButtonGroup;
