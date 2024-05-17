import { getRandomId } from "@ulld/utilities/identity";
import React, { ForwardedRef, HTMLProps, forwardRef, useMemo } from "react";
import clsx from "clsx";
import { useMathjaxBandaid } from "@ulld/hooks/useMathjaxBandaid";
import "#/styles/proseStyles.scss";
import { DocumentTypes } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { getComponentMap } from "@ulld/component-map/client";
import { webComponentMap } from "#/mdx/componentMap";

interface MDXArticleProps extends HTMLProps<HTMLElement> {
    mdx: DocumentTypes;
}

const MDXArticle = forwardRef(
    ({ mdx, ...props }: MDXArticleProps, ref: ForwardedRef<HTMLElement>) => {
        const id = props.id ? props.id : getRandomId();
        const article = useMDXComponent(mdx.body.code);
        const Article = useMemo(() => article, []);
        useMathjaxBandaid(id);
        const components = getComponentMap(mdx.body.raw, {}, webComponentMap);

        return (
            <article
                {...props}
                ref={ref}
                id={id}
                className={clsx(
                    "prose prose-invert prose-a:text-link !max-w-[min(83%,1080px)] py-8 mx-8",
                    props.className,
                )}
            >
                <Article
                    components={components}
                />
            </article>
        );
    },
);

MDXArticle.displayName = "MDXArticle";

export default MDXArticle;
