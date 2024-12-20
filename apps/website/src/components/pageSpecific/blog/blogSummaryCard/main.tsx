import { PageType } from "#/types/general";
import React from "react";
import BlogSummaryImageSection from "./blogSummaryImageSection";
import Link from "next/link"
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(timezone);
dayjs.extend(advancedFormat);

dayjs.tz.setDefault("America/Chicago")


interface BlogPostSummaryCardProps {
    item: PageType;
}

const getItemDate = (item: PageType): string | undefined => {
        let _itemDate = item.data.updated || item.data.created;
        if (_itemDate) {
            _itemDate = dayjs(_itemDate.replaceAll("-", "/")).format("MMM Do, YYYY");
        }
        return _itemDate
    }

const BlogPostSummaryCard = ({ item }: BlogPostSummaryCardProps) => {
    const itemDate = getItemDate(item)

    return (
        <div
            className={"w-full flex flex-col sm:grid sm:grid-cols-[200px_1fr] gap-x-6 gap-y-4 place-items-center"}
        >
            <div className={"w-full h-auto sm:w-[200px] sm:h-[200px] rounded-[20px] overflow-hidden"}>
                <BlogSummaryImageSection item={item} />
            </div>
            <div className={"w-full flex flex-col gap-2 justify-center items-start"}>
                {itemDate && itemDate !== "Invalid Date" && (
                    <div className={"text-sm"}>{itemDate}</div>
                )}
                <Link
                    href={item.url}
                    className={"text-xl font-semibold"}>{item.data.title}</Link>
                <p className={"text-sm"}>
                    {item.data.description}
                </p>
            </div>
        </div>
    );
};

BlogPostSummaryCard.displayName = "BlogPostSummaryCard";

export default BlogPostSummaryCard;
