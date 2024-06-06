import { DocumentTypes } from "contentlayer/generated";
import React from "react";

interface MdxListItemProps { 
    mdx: DocumentTypes
}

const MdxListItem = ({ mdx }: MdxListItemProps) => {
    const article = useMDXComponent(mdx.body.code);
    const Article = useMemo(() => article, []);
    const components = getComponentMap(mdx.body.raw, {}, webComponentMap);

    return <Article components={components} />
};

MdxListItem.displayName = "MdxListItem";

export default MdxListItem;
