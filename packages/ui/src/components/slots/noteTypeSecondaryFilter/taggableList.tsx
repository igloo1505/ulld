import { Route } from "next";
import React from "react";
import TaggableBadge from "../../navigationUtilityComponents/badges/taggableBadge";
import { AppConfigSchemaOutput } from "@ulld/types";
import RemoveTaggableBadge from "../../navigationUtilityComponents/badges/removeTaggableBadge";


interface TaggableListProps {
    items: string[];
    type: "tag" | "topic" | "subject";
    label?: string;
    activeItems?: string[];
    noteType: AppConfigSchemaOutput["noteTypes"][number];
    searchParams: any;
}

const defaultLabels: Record<TaggableListProps["type"], string> = {
    tag: "Tags",
    topic: "Topics",
    subject: "Subjects",
};

const TaggableList = ({
    items,
    type,
    label,
    activeItems = [],
    noteType,
    searchParams,
}: TaggableListProps) => {
    if (!items || !items.length) return null;
    let inactiveItems = items.filter((s) => !activeItems.includes(s));
    return (
        <div
            className={
                "w-full flex flex-col justify-center items-center md:items-start"
            }
        >
            <h3 className={"w-full text-lg font-semibold mb-2"}>
                {label || defaultLabels[type]}
            </h3>
            <div
                className={
                    "w-full h-fit flex flex-row justify-start items-center flex-wrap gap-4 px-6 md:px-8"
                }
            >
                {activeItems.map((s, i) => {
                    return (
                        <RemoveTaggableBadge
                            searchParams={searchParams}
                            basePath={noteType.url as Route}
                            key={`${type}-active-${i}`}
                            value={s}
                            category={noteType.docType}
                            type={type}
                        />
                    );
                })}
                {inactiveItems.map((s, i) => {
                    return (
                        <TaggableBadge
                            searchParams={searchParams}
                            basePath={noteType.url as Route}
                            key={`${type}-${i}`}
                            value={s}
                            category={noteType.docType}
                            type={type}
                        />
                    );
                })}
            </div>
        </div>
    );
};

TaggableList.displayName = "TaggableList";

export default TaggableList;
