import { Route } from "next";
import React from "react";
import { AppConfigSchemaOutput } from "@ulld/types";
import { TaggableListConditionalDropdown } from "./dropdown/taggableListConditionalDropdown";
import { WithOptional } from "@ulld/utilities/types";

interface TaggableListProps {
    items: string[];
    type: "tag" | "topic" | "subject";
    label?: string;
    activeItems?: string[];
    noteType: WithOptional<AppConfigSchemaOutput["noteTypes"][number], "docType">;
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
                "w-full flex flex-col justify-center items-center md:items-start px-6 md:px-8 my-4"
            }
        >
            <h3 className={"w-full text-lg font-semibold mb-2"}>
                {label || defaultLabels[type]}
            </h3>
                <TaggableListConditionalDropdown
                    activeItems={activeItems.map((s, i) => ({
                        searchParams: searchParams,
                        basePath: noteType.url as Route,
                        key: `${type}-active-${i}`,
                        value: s,
                        category: noteType.docType,
                        type: type,
                    }))}
                    inactiveItems={inactiveItems.map((s, i) => ({
                        searchParams: searchParams,
                        basePath: noteType.url as Route,
                        key: `${type}-${i}`,
                        value: s,
                        category: noteType.docType,
                        type: type,
                    }))}
                />
        </div>
    );
};

TaggableList.displayName = "TaggableList";

export default TaggableList;
