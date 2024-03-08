"use client"
import React from 'react'
import PaginationButtonGroup, { PaginationButtonGroupProps } from '../paginationButtonGroup';
import { formatSearchAllParams } from '#/lib/formatting/formatSearchAllParams';
import { Route } from 'next';
import { DocTypes } from "#/classes/prismaMdxRelations/zod/general"



interface CategoryListPaginationGroupProps extends PaginationButtonGroupProps {
    categories: DocTypes[] | "all" | "bookmarked"
}

const CategoryListPaginationGroup = ({ searchParams, ...props }: CategoryListPaginationGroupProps) => {
    return (
        <PaginationButtonGroup
            {...props}
            page={searchParams?.page ? parseInt(searchParams.page) - 1 : 0}
            hrefBuilder={(idx, cnt, selectedPage): Route => {
                return `${props.basePath || "/searchAll"}?${formatSearchAllParams({
                    ...searchParams,
                    page: `${selectedPage + 1}`
                })}`
            }}
        />
    )
}


CategoryListPaginationGroup.displayName = "CategoryListPaginationGroup"


export default CategoryListPaginationGroup;
