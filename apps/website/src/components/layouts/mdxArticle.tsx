"use client";
import { getRandomId } from "@ulld/utilities/identity";
import React, {
    ForwardedRef,
    HTMLProps,
    forwardRef,
    useMemo,
} from "react";
import { cn } from "@ulld/utilities/cn"
import { useMathjaxBandaid } from "@ulld/hooks/useMathjaxBandaid";
import "#/styles/proseStyles.scss";
import { DocumentTypes } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { getComponentMap } from "@ulld/component-map/client";
import { webComponentMap } from "#/mdx/componentMap";
import InternalReduxProvider from "#/state/provider";
import store from "#/state/store";
import Citations from "../academic/citations";
import { NoteStateObserver } from "@ulld/state/observers/noteState";
import MdxArticleNavButtons from "./mdxArticleNavButtons";
import {useAutoWrapCode} from "@ulld/hooks/useAutoWrapCode"


interface MDXArticleProps extends HTMLProps<HTMLElement> {
    mdx: DocumentTypes;
    paddingTop?: boolean;
    isSource?: boolean;
    hideSourceButton?: boolean
    wrapCode?: boolean
    docsWide?: boolean
}


const MDXArticle = forwardRef(
    (
        { mdx, wrapCode, docsWide, paddingTop = true, hideSourceButton = false, isSource, ...props }: MDXArticleProps,
        ref: ForwardedRef<HTMLElement>,
    ) => {
        const id = props.id ? props.id : getRandomId();
        const article = useMDXComponent(mdx.body.code);
        const Article = useMemo(() => article, []);

        useMathjaxBandaid(id);

        const components = getComponentMap(mdx.body.raw, {}, webComponentMap);

        const citationsEm = useMemo(
            () => <Citations noteId={"id" in mdx ? mdx.id : undefined} />,
            [mdx],
        );

        return (
            <InternalReduxProvider>
                <NoteStateObserver store={store} />
                {!hideSourceButton && <MdxArticleNavButtons
                    articleId={"id" in mdx ? mdx.id : undefined}
                    isSource={isSource}
                />}
                <article
                    {...props}
                    ref={ref}
                    id={id}
                    className={cn(
                        "@container/mdx w-full prose prose-invert prose-a:text-link mdx py-8 group-[.mdx-wide]/mdxLayout:w-full group-[.mdx-wide]/mdxLayout:md:!max-w-[min(1440px,calc(100%-128px))] group-[.mdx-full]/mdxLayout:!max-w-full",
                        docsWide ? "!max-w-[min(calc(100%-6rem),1440px)]" : "!max-w-[min(83%,1080px)]",
                        paddingTop && "pt-[108px]",
                        props.className,
                    )}
                >
                    <Article 
                        /* ref={(wrapCode || ("wrapCode" in mdx && mdx.wrapCode)) ? wrapCodeRef : undefined} */
                        components={components} 
                    />
                    {citationsEm}
                </article>
            </InternalReduxProvider>
        );
    },
);

MDXArticle.displayName = "MDXArticle";

export default MDXArticle;
