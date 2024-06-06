import { webComponentMap } from "#/mdx/componentMap";
import { getComponentMap } from "@ulld/component-map/client";
import cn from "@ulld/utilities/cn";
import { DocumentTypes, Documentation } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import React, { HTMLProps, useMemo } from "react";

interface MdxListItemProps extends HTMLProps<HTMLElement> {
    mdx: Documentation;
}

const MdxListItem = ({ mdx, ...props }: MdxListItemProps) => {
    console.log("mdx: ", mdx);
    const article = useMDXComponent(mdx.body.code);
    const Article = useMemo(() => article, []);
    const components = getComponentMap(mdx.body.raw, {}, webComponentMap);

    return (
        <section
            {...props}
            /* ref={ref} */
            id={mdx.id}
            className={cn(
                "@container/mdx w-full prose prose-invert prose-a:text-link mdx !max-w-[min(83%,1080px)] py-8 group-[.mdx-wide]/mdxLayout:w-full group-[.mdx-wide]/mdxLayout:md:!max-w-[min(1440px,100vw-128px)] group-[.mdx-full]/mdxLayout:!max-w-full",
                props.className,
            )}
        >
            <h1 className={"!mb-0"}>{mdx.component}</h1>
            <Article components={components} />
        </section>
    );
};

MdxListItem.displayName = "MdxListItem";

export default MdxListItem;
