import React from "react";
import { TOCItem } from "fumadocs-core/toc";
import { ContentHeading } from "@ulld/utilities/types";

interface TocItemInternalProps {
    item: ContentHeading;
}

const TocItemInternal = ({ item }: TocItemInternalProps) => {
    return <TOCItem {...item} href={item.url} />;
};

TocItemInternal.displayName = "TocItemInternal";

export default TocItemInternal;
