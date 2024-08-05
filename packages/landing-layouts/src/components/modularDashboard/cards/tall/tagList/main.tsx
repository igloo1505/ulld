"use client";
import React, { useState } from "react";
import CardContainer from "../../../util/cardContainer";
import { TaggableData, TaggableFilterType } from "../../../../../types";
import { ScrollArea } from "@ulld/tailwind/scroll-area";
import Link from "next/link";
import { searchAllParamsToSearchParamsClass } from "@ulld/utilities/searchUtils";
import { capitalize } from "@ulld/utilities/stringUtils";
import TaggableTypeToggle from "../../../util/taggableTypeToggle/main";
import cn from "@ulld/utilities/cn";
import { useBreakPoints } from "@ulld/hooks/useBreakpoints";

interface TagListCardProps {
    taggables: TaggableData;
    className?: string;
    showKey: "tagsOnTop" | "tagsOnBottom"
    breakPoint: number
    defaultShow?: boolean
    containerId: string
}

const TagListCard = ({ taggables, className, showKey, breakPoint, defaultShow, containerId }: TagListCardProps) => {
    const [dataType, setDataType] = useState<keyof TaggableData>("tags");
    
    const breakPointData = useBreakPoints({
        tagList: breakPoint
    }, "minWidth", {containerId})

    if((breakPointData === null && !defaultShow) || (breakPointData?.tagList && showKey === "tagsOnBottom") || (!breakPointData?.tagList && showKey === "tagsOnTop")){
        return null
    }


    return (
        <CardContainer
            className={cn("justify-start w-full md:w-[calc(50%-0.5rem)] extraMedium:max-w-[300px] extraMedium:min-w-[250px] pt-4", className)}
        >
            <TaggableTypeToggle
                options={Object.keys(taggables) as TaggableFilterType[]}
                value={dataType}
                onChange={setDataType}
                isTop={defaultShow}
            >
                <div className={""}>{capitalize(dataType)}</div>
            </TaggableTypeToggle>
            <ScrollArea className={"w-full h-[min(50vh,250px)]"}>
                <ul className={"flex flex-col"}>
                    {taggables[dataType].map((t, i) => {
                        return (
                            <Link
                                key={`tag-item-${t}-${i}`}
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
