import { webComponentMap } from "#/mdx/componentMap";
import { getComponentMap } from "@ulld/component-map/client";
import { useAutoWrapCode } from "@ulld/hooks/useAutoWrapCode";
import { Separator } from "@ulld/tailwind/separator";
import cn from "@ulld/utilities/cn";
/* import { Documentation } from "contentlayer/generated"; */
/* import { useMDXComponent } from "next-contentlayer/hooks"; */
import React, { HTMLProps, useMemo } from "react";

interface MdxListItemProps extends HTMLProps<HTMLElement> {
    /* mdx: Documentation; */
    mdx: any;
    isLast: boolean;
}

const MdxListItem = ({ mdx, isLast, ...props }: MdxListItemProps) => {
    /* const article = useMDXComponent(mdx.body.code); */
    /* const Article = useMemo(() => article, []); */
    const components = getComponentMap(mdx.body.raw, {}, webComponentMap);

    const Article  =(props: any) => <div>Fix this! Disabled contentlayer for now.</div>
    return (
        <>
            <section
                {...props}
                /* ref={ref} */
                id={mdx.id}
                className={cn(
                    "@container/mdx w-full prose prose-invert prose-a:text-link mdx !max-w-[min(calc(100vw-8rem),1080px)] px-8 py-8 group-[.mdx-wide]/mdxLayout:w-full group-[.mdx-wide]/mdxLayout:md:!max-w-[min(1440px,100vw-8rem)] group-[.mdx-full]/mdxLayout:!max-w-full",
                    props.className,
                )}
            >
                <h1 className={"!mb-0"}>{mdx.component}</h1>
                <Article
                    /* ref={wrapCodeRef} */
                    components={components}
                />
            </section>
            {!isLast && <Separator className={"not-prose"} />}
        </>
    );
};

MdxListItem.displayName = "MdxListItem";

export default MdxListItem;
