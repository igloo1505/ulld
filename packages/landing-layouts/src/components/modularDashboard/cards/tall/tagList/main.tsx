"use client";
import React, { useState } from "react";
import CardContainer from "../../../util/cardContainer";
import { TaggableData, TaggableFilterType } from "../../../../../types";
import { ScrollArea } from "@ulld/tailwind/scroll-area";
import Link from "next/link";
import { searchAllParamsToSearchParamsClass } from "@ulld/utilities/searchUtils";
import { capitalize } from "@ulld/utilities/stringUtils";
import TaggableTypeToggle from "../../../util/taggableTypeToggle/main";

interface TagListCardProps {
    taggables: TaggableData;
    cardClasses?: string;
}

const TagListCard = ({ taggables, cardClasses }: TagListCardProps) => {
    const [dataType, setDataType] = useState<keyof TaggableData>("tags");

    return (
        <CardContainer
            className={"justify-start w-1/3 max-w-[300px] min-w-[250px] py-4"}
        >
            <TaggableTypeToggle
                options={Object.keys(taggables) as TaggableFilterType[]}
                value={dataType}
                onChange={setDataType}
                popover={{
                    className: "w-fit flex flex-row justify-center items-center gap-2"
                }}
            >
                <div className={""}>{capitalize(dataType)}</div>
            </TaggableTypeToggle>
            <ScrollArea className={"w-full"}>
                <ul className={"flex flex-col"}>
                    {taggables[dataType].map((t) => {
                        return (
                            <Link
                                role="listitem"
                                href={`/searchAll?${searchAllParamsToSearchParamsClass({
                                    [dataType]: [t],
                                })}`}
                                className={
                                    "w-full px-4 py-1 transition-colors duration-200 text-foreground/60 hover:text-foreground"
                                }
                            >
                                {t}
                            </Link>
                        );
                    })}
                </ul>
            </ScrollArea>
        </CardContainer>
    );
};

TagListCard.displayName = "TagListCard";

export default TagListCard;
