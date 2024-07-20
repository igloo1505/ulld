import { formatSearchAllParams } from "@ulld/state/searchParamSchemas/utilities/formatSearchAllParams";
import { XIcon } from "lucide-react";
import React from "react";
import Link from "next/link";
import { TagBadgeProps } from "./taggableBadge";
import { ArrayUtilities } from "@ulld/utilities/arrayUtilities";
import { Badge } from "@ulld/tailwind/badge";

interface RemoveTaggableBadgeProps extends TagBadgeProps { }

const RemoveTaggableBadge = ({
    value,
    searchParams,
    type,
    category,
    basePath = "/searchAll",
    ...props
}: RemoveTaggableBadgeProps) => {
    let k = `${type}s`;
    let newTopics = (
        searchParams[k] ? ArrayUtilities.beArray(searchParams[k]) : []
    ).filter((t) => t !== value);
    let params = formatSearchAllParams({
        ...searchParams,
        categories: [category],
        topics: newTopics,
    });

    return (
        <Badge {...props}>
            <Link href={`${basePath}?${params}`}>
                <XIcon className="h-2 w-2" />
                {value}
            </Link>
        </Badge>
    );
};

RemoveTaggableBadge.displayName = "RemoveTaggableBadge";

export default RemoveTaggableBadge;
