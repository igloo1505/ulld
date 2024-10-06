import { BadgeProps, Badge } from "@ulld/tailwind/badge";
import React from "react";
import Link from "next/link";
import { formatSearchAllParams } from "@ulld/state/searchParamSchemas/utilities/formatSearchAllParams";

export interface TagBadgeProps extends BadgeProps {
  value: string;
  searchParams: any;
  type: "tag" | "topic" | "subject";
  category?: string;
  basePath?: string;
}

const TaggableBadge = ({
  value,
  searchParams,
  type,
  category,
  basePath = "/searchAll",
  ...props
}: TagBadgeProps) => {
  const params = formatSearchAllParams({
    ...searchParams,
    categories: [category],
    [`${type}s`]: [value],
  });
  return (
    <Link href={`${basePath}?${params}`}>
      <Badge {...props}>{value}</Badge>
    </Link>
  );
};

TaggableBadge.displayName = "TaggableBadge";

export default TaggableBadge;
