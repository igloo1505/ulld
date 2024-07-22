import React, { useEffect, useMemo, useState } from 'react'
import { PaginationProps } from '../../../types/general'
import { parsePaginationTemplateString } from "@ulld/utilities/paginationUtils"
import { buttonVariants } from '@ulld/tailwind/button'
import Link from "next/link"
import {cn} from "@ulld/utilities/cn"
import { ChevronsLeft, ChevronsRight } from 'lucide-react'

interface PaginationGroupProps extends PaginationProps {

}


interface PaginationData {
    totalItems: number
    perPage: number
    currentPage: number
    maxButtons: number
}


interface PaginationButtonData {
    href: string;
    pageNumber: number;
    arrow?: "right" | "left"
    active?: boolean
}


const getPagination = (
    d: PaginationData,
    formatHref: (pageNumber: number) => string,
): PaginationButtonData[] => {
    let _items = Array(d.totalItems).fill(0).map((_, i) => i)
    let itemsData: PaginationButtonData[] = [];
    const maxPage = Math.ceil(d.totalItems / d.perPage);
    if ((d.currentPage >= d.maxButtons / 2) && maxPage > d.maxButtons) {
        itemsData.push({
            pageNumber: 1,
            href: formatHref(1),
            arrow: "left",
            active: d.currentPage === 1
        });
    }
    const includeRightArrow = (d.currentPage <= maxPage - d.maxButtons / 2 && maxPage > d.maxButtons);
    const overlapBackwards = Math.floor(maxPage - (d.currentPage + ((d.maxButtons - itemsData.length - 1) / 2)))
    const overlapForwards = Math.floor((d.currentPage - ((d.maxButtons - itemsData.length - 1) / 2)))
    if (includeRightArrow) {
        itemsData = [
            ...itemsData,
            ..._items.slice(Math.max(itemsData.length, overlapBackwards < 0 ? d.currentPage - ((d.maxButtons - itemsData.length - 1 + overlapBackwards) / 2) : d.currentPage - (d.maxButtons - itemsData.length - 1) / 2), overlapForwards < 0 ? d.currentPage + ((d.maxButtons - itemsData.length - 1) / 2) - overlapForwards : d.currentPage + ((d.maxButtons - itemsData.length - 1) / 2)).map((n) => ({ pageNumber: n + 1, href: formatHref(n + 1) })),
        ];
        if (itemsData[itemsData.length - 1].pageNumber < maxPage) {
            itemsData.push({
                pageNumber: maxPage,
                href: formatHref(maxPage),
                arrow: "right",
                active: maxPage === d.currentPage
            })
        }
    } else {
        itemsData = [
            ...itemsData,
            ..._items.slice(Math.max(0, itemsData.length, overlapBackwards < 0 ? d.currentPage - ((d.maxButtons - itemsData.length) / 2 - overlapBackwards) : d.currentPage - (d.maxButtons - itemsData.length) / 2), Math.min(maxPage, includeRightArrow ? d.currentPage + ((d.maxButtons - itemsData.length) / 2 + overlapForwards) : d.currentPage + ((d.maxButtons - itemsData.length) / 2))).map((n) => ({ pageNumber: n + 1, href: formatHref(n + 1), active: n + 1 === d.currentPage })),
        ]
    }
    return itemsData;
};

const PaginationGroup = (props: PaginationGroupProps) => {
    const [vpWidth, setVpWidth] = useState<number>(0)
    const data = useMemo(() => getPagination({
        totalItems: props.totalItems,
        perPage: props.itemsPerPage,
        currentPage: props.currentPage,
        maxButtons: vpWidth < 600 ? 6 : vpWidth < 920 ? 8 : 10
    }, (n) => parsePaginationTemplateString(props.hrefTemplate, n)), [props, vpWidth]) 

    const handleResize = () => {
        setVpWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <div className={"flex flex-row justify-center items-center gap-4 w-full flex-wrap"}>{data.map((d) => <Link
            href={d.href}
            key={`pagination-button-${d.pageNumber}`}
            className={cn(buttonVariants({variant: d.active ? "outline" : "ghost", size: "icon"}))}
        >{d.arrow === "left" ? <ChevronsLeft className={"w-3 h-3 text-foreground"} /> : d.arrow === "right" ? <ChevronsRight className={"w-3 h-3 text-foreground"} /> : d.pageNumber}</Link>)}</div>
    )
}


PaginationGroup.displayName = "PaginationGroup"


export default PaginationGroup;
